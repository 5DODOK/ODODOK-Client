"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouterWithNProgress } from '@/hooks/useRouterWithNProgress';
import * as S from './style';
import { useSearchQuestions } from '@/hooks/useSearchQuestions';
import { useDeleteQuestion } from '@/hooks/useDeleteQuestion';
import { useUpdateQuestion } from '@/hooks/useUpdateQuestion';
import { useUserStore } from '@/store/userStore';
import { SearchQuestionParams, SearchQuestionResult } from '@/services/questionService';

interface SearchFilters {
  year: string;
  company_name: string;
  category_id: string;
  interview_type: string;
  sort: 'new' | 'old';
}

interface EditFormData {
  question: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  year?: number;
  companyName?: string;
  categoryId?: number;
  interviewType?: '기술면접' | '인성면접';
}

export default function SearchContainer() {
  const router = useRouterWithNProgress();
  const { userInfo } = useUserStore();
  const deleteQuestionMutation = useDeleteQuestion();
  const updateQuestionMutation = useUpdateQuestion();

  const [editingQuestion, setEditingQuestion] = useState<SearchQuestionResult | null>(null);
  const [editFormData, setEditFormData] = useState<EditFormData>({
    question: '',
    difficulty: 'MEDIUM',
    categoryId: undefined,
    year: undefined,
    companyName: '',
    interviewType: undefined
  });

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
  // @bssm.hs.kr 이메일이면 관리자로 판단
  const isAdmin = userInfo?.email?.endsWith('@bssm.hs.kr') || false;
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

  const handleDelete = async (questionId: number) => {
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!confirm('정말 이 질문을 삭제하시겠습니까?')) {
      return;
    }

    deleteQuestionMutation.mutate(
      { id: questionId, token },
      {
        onSuccess: () => {
          alert('질문이 삭제되었습니다.');
        },
        onError: (err: unknown) => {
          const errorMessage = err && typeof err === 'object' && 'response' in err
            ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message)
            : undefined;
          alert(errorMessage || '질문 삭제 중 오류가 발생했습니다.');
        }
      }
    );
  };

  const handleEditClick = (question: SearchQuestionResult) => {
    setEditingQuestion(question);
    setEditFormData({
      question: question.question,
      difficulty: question.difficultyLabel,
      categoryId: question.categoryId,
      year: question.year,
      companyName: question.companyName || '',
      interviewType: (question.interviewType as '기술면접' | '인성면접') || undefined
    });
  };

  const handleEditSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!token || !editingQuestion) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!editFormData.question.trim()) {
      alert('질문 내용은 필수입니다.');
      return;
    }

    if (editFormData.question.length > 500) {
      alert('질문 내용은 500자 이내여야 합니다.');
      return;
    }

    updateQuestionMutation.mutate(
      {
        id: editingQuestion.id,
        payload: editFormData,
        token
      },
      {
        onSuccess: () => {
          alert('질문이 수정되었습니다.');
          setEditingQuestion(null);
        },
        onError: (err: unknown) => {
          const errorMessage = err && typeof err === 'object' && 'response' in err
            ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message)
            : undefined;
          alert(errorMessage || '질문 수정 중 오류가 발생했습니다.');
        }
      }
    );
  };

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let processedValue: string | number | undefined = value;

    if (name === 'categoryId') {
      processedValue = value ? Number(value) : undefined;
    } else if (name === 'year') {
      processedValue = value ? Number(value) : undefined;
    }

    setEditFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  return (
    <S.PageWrapper>
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
                  {isAdmin && (
                    <>
                      <S.ActionButton
                        onClick={() => handleEditClick(question)}
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                          color: 'white',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        수정
                      </S.ActionButton>
                      <S.ActionButton
                        onClick={() => handleDelete(question.id)}
                        style={{
                          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                          color: 'white',
                          boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)'
                        }}
                      >
                        삭제
                      </S.ActionButton>
                    </>
                  )}
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

        {editingQuestion && (
          <S.ModalOverlay onClick={() => setEditingQuestion(null)}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <S.ModalHeader>
                <h2>질문 수정</h2>
                <S.CloseButton onClick={() => setEditingQuestion(null)}>✕</S.CloseButton>
              </S.ModalHeader>
              <S.ModalBody>
                <S.FormGroup>
                  <S.Label>질문 내용 <span style={{ color: '#ef4444' }}>*</span></S.Label>
                  <S.Input
                    type="text"
                    name="question"
                    value={editFormData.question}
                    onChange={handleEditFormChange}
                    placeholder="질문 내용을 입력하세요 (최대 500자)"
                    maxLength={500}
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <S.Label>면접 유형</S.Label>
                  <S.Select
                    name="interviewType"
                    value={editFormData.interviewType || ''}
                    onChange={handleEditFormChange}
                  >
                    <option value="">유형을 선택하세요</option>
                    <option value="기술면접">기술면접</option>
                    <option value="인성면접">인성면접</option>
                  </S.Select>
                </S.FormGroup>
                <S.FormGroup>
                  <S.Label>난이도</S.Label>
                  <S.Select
                    name="difficulty"
                    value={editFormData.difficulty}
                    onChange={handleEditFormChange}
                  >
                    <option value="EASY">쉬움</option>
                    <option value="MEDIUM">보통</option>
                    <option value="HARD">어려움</option>
                  </S.Select>
                </S.FormGroup>
                <S.FormGroup>
                  <S.Label>연도</S.Label>
                  <S.Input
                    type="number"
                    name="year"
                    value={editFormData.year || ''}
                    onChange={handleEditFormChange}
                    placeholder="예: 2024"
                    min={2000}
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <S.Label>회사명</S.Label>
                  <S.Input
                    type="text"
                    name="companyName"
                    value={editFormData.companyName || ''}
                    onChange={handleEditFormChange}
                    placeholder="회사명을 입력하세요 (최대 100자)"
                    maxLength={100}
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <S.Label>카테고리</S.Label>
                  <S.Select
                    name="categoryId"
                    value={editFormData.categoryId || ''}
                    onChange={handleEditFormChange}
                  >
                    <option value="">카테고리를 선택하세요</option>
                    {data?.facets?.category?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </S.Select>
                </S.FormGroup>

              </S.ModalBody>
              <S.ModalFooter>
                <S.ModalButton
                  onClick={() => setEditingQuestion(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff'
                  }}
                >
                  취소
                </S.ModalButton>
                <S.ModalButton
                  onClick={handleEditSubmit}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                  }}
                >
                  저장
                </S.ModalButton>
              </S.ModalFooter>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.Container>
    </S.PageWrapper>
  );
}