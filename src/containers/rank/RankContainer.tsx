"use client";
import { useRankings } from '@/hooks/useRankings';
import * as S from './style';

export default function RankContainer() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || '' : '';
  const { data, isLoading, isError } = useRankings(token);

  if (isLoading) {
    return <S.PageWrapper><S.Container><S.PageTitle>포인트 랭킹</S.PageTitle><div>로딩 중...</div></S.Container></S.PageWrapper>;
  }
  if (isError || !data) {
    return <S.PageWrapper><S.Container><S.PageTitle>포인트 랭킹</S.PageTitle><div>랭킹 정보를 불러올 수 없습니다.</div></S.Container></S.PageWrapper>;
  }

  const users = data.rankings;

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.PageTitle>포인트 랭킹</S.PageTitle>

        <S.RankingSection>
          <S.TopThree>
            {users.slice(0, 3).map((user, index) => (
              <S.TopUserCard key={user.rank} rank={index + 1}>
                <S.RankIcon>{getRankIcon(user.rank)}</S.RankIcon>
                <S.TopUserAvatar>
                  {user.profileImageUrl ? (
                    <S.AvatarImage src={user.profileImageUrl} alt={user.username} />
                  ) : (
                    <S.AvatarImage as="div">{user.username[0]}</S.AvatarImage>
                  )}
                </S.TopUserAvatar>
                <S.TopUserName>{user.username}</S.TopUserName>
                <S.TopUserPoints>{user.points.toLocaleString()}P</S.TopUserPoints>
              </S.TopUserCard>
            ))}
          </S.TopThree>

          <S.RankingList>
            <S.RankingHeader>
              <S.HeaderCell>순위</S.HeaderCell>
              <S.HeaderCell>사용자</S.HeaderCell>
              <S.HeaderCell>포인트</S.HeaderCell>
            </S.RankingHeader>

            {users.map((user) => (
              <S.RankingRow key={user.rank}>
                <S.RankCell>
                  <S.RankNumber>{getRankIcon(user.rank)}</S.RankNumber>
                </S.RankCell>
                <S.UserCell>
                  <S.UserAvatar>
                    {user.profileImageUrl ? (
                      <S.AvatarImage src={user.profileImageUrl} alt={user.username} />
                    ) : (
                      <S.AvatarImage as="div">{user.username[0]}</S.AvatarImage>
                    )}
                  </S.UserAvatar>
                  <S.UserName>{user.username}</S.UserName>
                </S.UserCell>
                <S.PointsCell>{user.points.toLocaleString()}P</S.PointsCell>
              </S.RankingRow>
            ))}
          </S.RankingList>
        </S.RankingSection>
      </S.Container>
    </S.PageWrapper>
  );
}