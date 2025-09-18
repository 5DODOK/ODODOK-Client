"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { useUserStore } from '@/store/userStore';
import * as S from './style';

interface UserStats {
  totalSolved: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  currentStreak: number;
  maxStreak: number;
  totalScore: number;
  rank: number;
  level: string;
}

interface SolvedProblem {
  id: number;
  title: string;
  difficulty: string;
  solvedAt: string;
  score: number;
}

interface UserProfile {
  email: string;
  bio: string;
  github: string;
  blog: string;
}

export default function MypageContainer() {
  const { userInfo, updateUserInfo } = useUserStore();
  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'history'>('profile');
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState<UserProfile>({
    email: 'ohyun@ododok.com',
    bio: '알고리즘을 사랑하는 개발자입니다.',
    github: 'https://github.com/ohyun',
    blog: 'https://blog.ohyun.dev'
  });

  const [editForm, setEditForm] = useState<UserProfile>(profile);

  const userStats: UserStats = {
    totalSolved: 125,
    easyCount: 45,
    mediumCount: 56,
    hardCount: 24,
    currentStreak: 5,
    maxStreak: 15,
    totalScore: 1820,
    rank: 6,
    level: '실버'
  };

  const solvedProblems: SolvedProblem[] = [
    {
      id: 1,
      title: "두 수의 합",
      difficulty: "easy",
      solvedAt: "2024-01-15",
      score: 100
    },
    {
      id: 2,
      title: "이진 탐색 구현",
      difficulty: "medium",
      solvedAt: "2024-01-14",
      score: 150
    },
    {
      id: 3,
      title: "동적 계획법 기초",
      difficulty: "hard",
      solvedAt: "2024-01-13",
      score: 200
    },
    {
      id: 4,
      title: "그래프 탐색",
      difficulty: "medium",
      solvedAt: "2024-01-12",
      score: 150
    },
    {
      id: 5,
      title: "정렬 알고리즘",
      difficulty: "easy",
      solvedAt: "2024-01-11",
      score: 100
    }
  ];

  const handleProfileEdit = () => {
    setIsEditing(true);
    setEditForm(profile);
  };

  const handleProfileSave = async (e: FormEvent) => {
    e.preventDefault();

    // TODO: API 호출
    console.log('프로필 업데이트:', editForm);

    setProfile(editForm);
    setIsEditing(false);

    // 사용자 이름이 변경된 경우 전역 상태 업데이트
    if (editForm.email !== profile.email && userInfo) {
      updateUserInfo({
        ...userInfo,
        name: editForm.email.split('@')[0]
      });
    }
  };

  const handleProfileCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '쉬움';
      case 'medium': return '보통';
      case 'hard': return '어려움';
      default: return difficulty;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case '플래티넘': return '#22d3ee';
      case '골드': return '#fbbf24';
      case '실버': return '#94a3b8';
      case '브론즈': return '#a16207';
      default: return '#6b7280';
    }
  };

  return (
    <S.Container>
      <S.PageTitle>마이페이지</S.PageTitle>

      <S.ProfileHeader>
        <S.ProfileAvatar>
          <S.AvatarImage src={userInfo?.avatar || "https://i.imgur.com/YjvKgkW.png"} alt={userInfo?.name || "사용자"} />
        </S.ProfileAvatar>
        <S.ProfileInfo>
          <S.ProfileName>{userInfo?.name || "사용자"}</S.ProfileName>
          <S.ProfileLevel color={getLevelColor(userStats.level)}>
            {userStats.level}
          </S.ProfileLevel>
          <S.ProfileRank>전체 랭킹 #{userStats.rank}</S.ProfileRank>
        </S.ProfileInfo>
        <S.ProfileScore>
          <S.ScoreValue>{userStats.totalScore.toLocaleString()}</S.ScoreValue>
          <S.ScoreLabel>총 점수</S.ScoreLabel>
        </S.ProfileScore>
      </S.ProfileHeader>

      <S.TabNavigation>
        <S.TabButton
          active={activeTab === 'profile'}
          onClick={() => setActiveTab('profile')}
        >
          프로필
        </S.TabButton>
        <S.TabButton
          active={activeTab === 'stats'}
          onClick={() => setActiveTab('stats')}
        >
          통계
        </S.TabButton>
        <S.TabButton
          active={activeTab === 'history'}
          onClick={() => setActiveTab('history')}
        >
          해결 기록
        </S.TabButton>
      </S.TabNavigation>

      <S.TabContent>
        {activeTab === 'profile' && (
          <S.ProfileSection>
            {isEditing ? (
              <S.EditForm onSubmit={handleProfileSave}>
                <S.FormGroup>
                  <S.Label>이메일</S.Label>
                  <S.Input
                    type="email"
                    value={editForm.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                    required
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <S.Label>소개</S.Label>
                  <S.Textarea
                    value={editForm.bio}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('bio', e.target.value)}
                    placeholder="자신을 소개해보세요"
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <S.Label>GitHub</S.Label>
                  <S.Input
                    type="url"
                    value={editForm.github}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('github', e.target.value)}
                    placeholder="https://github.com/username"
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <S.Label>블로그</S.Label>
                  <S.Input
                    type="url"
                    value={editForm.blog}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('blog', e.target.value)}
                    placeholder="https://blog.example.com"
                  />
                </S.FormGroup>

                <S.ButtonGroup>
                  <S.SaveButton type="submit">저장</S.SaveButton>
                  <S.CancelButton type="button" onClick={handleProfileCancel}>취소</S.CancelButton>
                </S.ButtonGroup>
              </S.EditForm>
            ) : (
              <S.ProfileView>
                <S.ProfileField>
                  <S.FieldLabel>이메일</S.FieldLabel>
                  <S.FieldValue>{profile.email}</S.FieldValue>
                </S.ProfileField>

                <S.ProfileField>
                  <S.FieldLabel>소개</S.FieldLabel>
                  <S.FieldValue>{profile.bio}</S.FieldValue>
                </S.ProfileField>

                <S.ProfileField>
                  <S.FieldLabel>GitHub</S.FieldLabel>
                  <S.FieldLink href={profile.github} target="_blank" rel="noopener noreferrer">
                    {profile.github}
                  </S.FieldLink>
                </S.ProfileField>

                <S.ProfileField>
                  <S.FieldLabel>블로그</S.FieldLabel>
                  <S.FieldLink href={profile.blog} target="_blank" rel="noopener noreferrer">
                    {profile.blog}
                  </S.FieldLink>
                </S.ProfileField>

                <S.EditButton onClick={handleProfileEdit}>
                  프로필 수정
                </S.EditButton>
              </S.ProfileView>
            )}
          </S.ProfileSection>
        )}

        {activeTab === 'stats' && (
          <S.StatsSection>
            <S.StatsGrid>
              <S.StatCard>
                <S.StatValue>{userStats.totalSolved}</S.StatValue>
                <S.StatLabel>총 해결 문제</S.StatLabel>
              </S.StatCard>

              <S.StatCard>
                <S.StatValue>{userStats.currentStreak}</S.StatValue>
                <S.StatLabel>현재 연속일</S.StatLabel>
              </S.StatCard>

              <S.StatCard>
                <S.StatValue>{userStats.maxStreak}</S.StatValue>
                <S.StatLabel>최대 연속일</S.StatLabel>
              </S.StatCard>

              <S.StatCard>
                <S.StatValue>#{userStats.rank}</S.StatValue>
                <S.StatLabel>전체 순위</S.StatLabel>
              </S.StatCard>
            </S.StatsGrid>

            <S.DifficultyStats>
              <S.StatsTitle>난이도별 해결 현황</S.StatsTitle>
              <S.DifficultyGrid>
                <S.DifficultyCard color="#10b981">
                  <S.DifficultyLabel>쉬움</S.DifficultyLabel>
                  <S.DifficultyCount>{userStats.easyCount}</S.DifficultyCount>
                </S.DifficultyCard>

                <S.DifficultyCard color="#f59e0b">
                  <S.DifficultyLabel>보통</S.DifficultyLabel>
                  <S.DifficultyCount>{userStats.mediumCount}</S.DifficultyCount>
                </S.DifficultyCard>

                <S.DifficultyCard color="#ef4444">
                  <S.DifficultyLabel>어려움</S.DifficultyLabel>
                  <S.DifficultyCount>{userStats.hardCount}</S.DifficultyCount>
                </S.DifficultyCard>
              </S.DifficultyGrid>
            </S.DifficultyStats>
          </S.StatsSection>
        )}

        {activeTab === 'history' && (
          <S.HistorySection>
            <S.HistoryList>
              {solvedProblems.map((problem) => (
                <S.HistoryItem key={problem.id}>
                  <S.HistoryHeader>
                    <S.HistoryTitle>{problem.title}</S.HistoryTitle>
                    <S.HistoryDifficulty color={getDifficultyColor(problem.difficulty)}>
                      {getDifficultyText(problem.difficulty)}
                    </S.HistoryDifficulty>
                  </S.HistoryHeader>
                  <S.HistoryMeta>
                    <S.HistoryDate>해결일: {problem.solvedAt}</S.HistoryDate>
                    <S.HistoryScore>획득 점수: {problem.score}점</S.HistoryScore>
                  </S.HistoryMeta>
                </S.HistoryItem>
              ))}
            </S.HistoryList>
          </S.HistorySection>
        )}
      </S.TabContent>
    </S.Container>
  );
}