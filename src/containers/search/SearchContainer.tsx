"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouterWithNProgress } from '@/hooks/useRouterWithNProgress';
import * as S from './style';
import { useSearchQuestions } from '@/hooks/useSearchQuestions';
import { SearchQuestionParams } from '@/services/questionService';

interface SearchFilters {
  year: string;
  company_name: string;
  category_id: string;
  interview_type: string;
  sort: 'new' | 'old';
}

export default function SearchContainer() {
  const router = useRouterWithNProgress();
  const [filters, setFilters] = useState<SearchFilters>({
    year: '',
    company_name: '',
    category_id: '',
    interview_type: '',
    sort: 'new'
  });

  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState<SearchQuestionParams>({
    page: 1,
    size: 20,
    sort: 'new'
  });

  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || undefined : undefined;

  const { data, isLoading, error } = useSearchQuestions({
    params: searchParams,
    token,
    enabled: true
  });

  const handleFilterChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    const params: SearchQuestionParams = {
      page: 1,
      size: 20,
      sort: filters.sort
    };

    if (filters.year) {
      const yearNum = parseInt(filters.year);
      if (!isNaN(yearNum)) {
        params.year = yearNum;
      }
    }

    if (filters.company_name) {
      params.company_name = filters.company_name;
    }

    if (filters.category_id) {
      const categoryId = parseInt(filters.category_id);
      if (!isNaN(categoryId)) {
        params.category_id = categoryId;
      }
    }

    if (filters.interview_type) {
      params.interview_type = filters.interview_type;
    }

    setPage(1);
    setSearchParams(params);
  };

  const handleReset = () => {
    setFilters({
      year: '',
      company_name: '',
      category_id: '',
      interview_type: '',
      sort: 'new'
    });
    setPage(1);
    setSearchParams({
      page: 1,
      size: 20,
      sort: 'new'
    });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams(prev => ({
      ...prev,
      page: newPage
    }));
  };

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1: return '#10b981'; // EASY
      case 2: return '#f59e0b'; // MEDIUM
      case 3: return '#ef4444'; // HARD
      default: return '#6b7280';
    }
  };

  const getDifficultyText = (difficultyLabel: string) => {
    switch (difficultyLabel) {
      case 'EASY': return '쉬움';
      case 'MEDIUM': return '보통';
      case 'HARD': return '어려움';
      default: return difficultyLabel;
    }
  };

  return (
    <S.Container>
      <S.PageTitle>면접 질문 검색</S.PageTitle>

      <S.SearchSection>
        <S.Form onSubmit={handleSearch}>
          <S.FilterRow>
            <S.FilterGroup>
              <S.Label>학년도</S.Label>
              <S.Input
                type="number"
                value={filters.year}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilterChange('year', e.target.value)}
                placeholder="예: 2025"
                min="2000"
                max={new Date().getFullYear() + 1}
              />
            </S.FilterGroup>

            <S.FilterGroup>
              <S.Label>회사명</S.Label>
              <S.Input
                type="text"
                value={filters.company_name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilterChange('company_name', e.target.value)}
                placeholder="예: 네이버, 카카오"
              />
            </S.FilterGroup>
          </S.FilterRow>

          <S.FilterRow>
            <S.FilterGroup>
              <S.Label>카테고리</S.Label>
              <S.Select
                value={filters.category_id}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilterChange('category_id', e.target.value)}
              >
                <option value="">전체</option>
                {data?.facets?.category?.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </S.Select>
            </S.FilterGroup>

            <S.FilterGroup>
              <S.Label>면접 유형</S.Label>
              <S.Select
                value={filters.interview_type}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilterChange('interview_type', e.target.value)}
              >
                <option value="">전체</option>
                <option value="인성면접">인성면접</option>
                <option value="기술면접">기술면접</option>
              </S.Select>
            </S.FilterGroup>
          </S.FilterRow>

          <S.FilterRow>
            <S.FilterGroup>
              <S.Label>정렬</S.Label>
              <S.Select
                value={filters.sort}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilterChange('sort', e.target.value as 'new' | 'old')}
              >
                <option value="new">최신순</option>
                <option value="old">오래된순</option>
              </S.Select>
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
          <S.ResultCount>
            {isLoading ? '검색 중...' : `총 ${data?.total || 0}개의 면접 질문`}
          </S.ResultCount>
        </S.ResultHeader>

        {error && (
          <S.ErrorMessage>
            검색 중 오류가 발생했습니다. 다시 시도해주세요.
          </S.ErrorMessage>
        )}

        <S.ProblemList>
          {data?.results.map((question) => (
            <S.ProblemCard key={question.id}>
              <S.ProblemHeader>
                <S.ProblemTitle>{question.question}</S.ProblemTitle>
                <S.Difficulty color={getDifficultyColor(question.difficulty)}>
                  {getDifficultyText(question.difficultyLabel)}
                </S.Difficulty>
              </S.ProblemHeader>

              <S.ProblemMeta>
                <S.MetaItem>학년도: {question.year}</S.MetaItem>
                <S.MetaItem>회사: {question.companyName}</S.MetaItem>
                <S.MetaItem>카테고리: {question.categoryName}</S.MetaItem>
                <S.MetaItem>유형: {question.interviewType}</S.MetaItem>
                <S.MetaItem>작성일: {new Date(question.createdAt).toLocaleDateString()}</S.MetaItem>
              </S.ProblemMeta>

              <S.ProblemActions>
                <S.ActionButton
                  primary
                  onClick={() => {
                    localStorage.setItem('currentQuestion', JSON.stringify(question));
                    router.push(`/question/${question.id}`);
                  }}
                >
                  질문 보기
                </S.ActionButton>
              </S.ProblemActions>
            </S.ProblemCard>
          ))}
        </S.ProblemList>

        {data && data.total > 0 && (
          <S.Pagination>
            <S.PageButton
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              이전
            </S.PageButton>
            <S.PageInfo>
              {page} / {Math.ceil(data.total / (searchParams.size || 20))}
            </S.PageInfo>
            <S.PageButton
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= Math.ceil(data.total / (searchParams.size || 20))}
            >
              다음
            </S.PageButton>
          </S.Pagination>
        )}
      </S.ResultSection>
    </S.Container>
  );
}