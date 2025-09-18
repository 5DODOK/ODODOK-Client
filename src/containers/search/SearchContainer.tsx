"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import * as S from './style';

interface Problem {
  id: number;
  title: string;
  difficulty: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  solvedCount: number;
  company: string;
}

interface SearchFilters {
  keyword: string;
  difficulty: string;
  category: string;
  tag: string;
}

export default function SearchContainer() {
  const [filters, setFilters] = useState<SearchFilters>({
    keyword: '',
    difficulty: '',
    category: '',
    tag: ''
  });

  const [problems, setProblems] = useState<Problem[]>([
    {
      id: 1,
      title: "자기소개를 해주세요",
      difficulty: "easy",
      category: "인성면접",
      tags: ["자기소개", "기본질문", "첫인상"],
      author: "삼성전자",
      createdAt: "2024-03-15",
      solvedCount: 1250,
      company: "삼성전자"
    },
    {
      id: 2,
      title: "React의 Virtual DOM에 대해 설명해주세요",
      difficulty: "medium",
      category: "기술면접",
      tags: ["React", "Virtual DOM", "프론트엔드"],
      author: "카카오",
      createdAt: "2024-03-14",
      solvedCount: 890,
      company: "카카오"
    },
    {
      id: 3,
      title: "팀에서 갈등이 생겼을 때 어떻게 해결하시나요?",
      difficulty: "medium",
      category: "인성면접",
      tags: ["갈등해결", "팀워크", "커뮤니케이션"],
      author: "네이버",
      createdAt: "2024-03-13",
      solvedCount: 675,
      company: "네이버"
    },
    {
      id: 4,
      title: "데이터베이스 인덱스의 동작 원리를 설명해주세요",
      difficulty: "hard",
      category: "기술면접",
      tags: ["데이터베이스", "인덱스", "백엔드"],
      author: "라인",
      createdAt: "2024-03-12",
      solvedCount: 345,
      company: "라인"
    },
    {
      id: 5,
      title: "우리 회사에 지원한 이유가 무엇인가요?",
      difficulty: "easy",
      category: "인성면접",
      tags: ["지원동기", "회사분석", "열정"],
      author: "토스",
      createdAt: "2024-03-11",
      solvedCount: 980,
      company: "토스"
    },
    {
      id: 6,
      title: "REST API와 GraphQL의 차이점을 설명해주세요",
      difficulty: "medium",
      category: "기술면접",
      tags: ["API", "REST", "GraphQL", "백엔드"],
      author: "쿠팡",
      createdAt: "2024-03-10",
      solvedCount: 567,
      company: "쿠팡"
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: API 호출
    console.log('검색 조건:', filters);

    // 시뮬레이션을 위한 딜레이
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setFilters({
      keyword: '',
      difficulty: '',
      category: '',
      tag: ''
    });
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

  return (
    <S.Container>
      <S.PageTitle>면접 질문 검색</S.PageTitle>

      <S.SearchSection>
        <S.Form onSubmit={handleSearch}>
          <S.FilterRow>
            <S.FilterGroup>
              <S.Label>키워드</S.Label>
              <S.Input
                type="text"
                value={filters.keyword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilterChange('keyword', e.target.value)}
                placeholder="면접 질문 내용으로 검색"
              />
            </S.FilterGroup>

            <S.FilterGroup>
              <S.Label>난이도</S.Label>
              <S.Select
                value={filters.difficulty}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilterChange('difficulty', e.target.value)}
              >
                <option value="">전체</option>
                <option value="easy">쉬움</option>
                <option value="medium">보통</option>
                <option value="hard">어려움</option>
              </S.Select>
            </S.FilterGroup>
          </S.FilterRow>

          <S.FilterRow>
            <S.FilterGroup>
              <S.Label>카테고리</S.Label>
              <S.Select
                value={filters.category}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilterChange('category', e.target.value)}
              >
                <option value="">전체</option>
                <option value="인성면접">인성면접</option>
                <option value="기술면접">기술면접</option>
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <S.Label>태그</S.Label>
              <S.Input
                type="text"
                value={filters.tag}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilterChange('tag', e.target.value)}
                placeholder="자기소개, React, 팀워크 등"
              />
            </S.FilterGroup>
          </S.FilterRow>

          <S.ButtonRow>
            <S.SearchButton type="submit" disabled={isLoading}>
              {isLoading ? '검색중...' : '검색'}
            </S.SearchButton>
            <S.ResetButton type="button" onClick={handleReset}>
              초기화
            </S.ResetButton>
          </S.ButtonRow>
        </S.Form>
      </S.SearchSection>

      <S.ResultSection>
        <S.ResultHeader>
          <S.ResultCount>총 {problems.length}개의 면접 질문</S.ResultCount>
        </S.ResultHeader>

        <S.ProblemList>
          {problems.map((problem) => (
            <S.ProblemCard key={problem.id}>
              <S.ProblemHeader>
                <S.ProblemTitle>{problem.title}</S.ProblemTitle>
                <S.Difficulty color={getDifficultyColor(problem.difficulty)}>
                  {getDifficultyText(problem.difficulty)}
                </S.Difficulty>
              </S.ProblemHeader>

              <S.ProblemMeta>
                <S.MetaItem>카테고리: {problem.category}</S.MetaItem>
                <S.MetaItem>회사: {problem.company}</S.MetaItem>
                <S.MetaItem>답변: {problem.solvedCount}명</S.MetaItem>
                <S.MetaItem>작성일: {problem.createdAt}</S.MetaItem>
              </S.ProblemMeta>

              <S.TagList>
                {problem.tags.map((tag, index) => (
                  <S.Tag key={index}>{tag}</S.Tag>
                ))}
              </S.TagList>

              <S.ProblemActions>
                <S.ActionButton primary>질문 보기</S.ActionButton>
                <S.ActionButton>답변하기</S.ActionButton>
              </S.ProblemActions>
            </S.ProblemCard>
          ))}
        </S.ProblemList>
      </S.ResultSection>
    </S.Container>
  );
}