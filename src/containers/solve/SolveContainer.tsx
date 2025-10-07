"use client";
import { useState, ChangeEvent } from 'react';
import * as S from './style';

interface Problem {
  id: number;
  title: string;
  content: string;
  category: string;
  company: string;
  createdAt: string;
}

interface Company {
  id: number;
  name: string;
  problemCount: number;
}

export default function SolveContainer() {
  const [selectedMode, setSelectedMode] = useState<'company' | 'category' | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [problems, setProblems] = useState<Problem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  // 예시 회사 데이터
  const companies: Company[] = [
    { id: 1, name: "네이버", problemCount: 25 },
    { id: 2, name: "카카오", problemCount: 30 },
    { id: 3, name: "삼성전자", problemCount: 22 },
    { id: 4, name: "LG전자", problemCount: 18 },
    { id: 5, name: "SK하이닉스", problemCount: 15 },
    { id: 6, name: "현대자동차", problemCount: 20 }
  ];

  // 예시 문제 데이터 (10문제)
  const sampleProblems: Problem[] = [
    {
      id: 1,
      title: "자기소개를 해주세요",
      content: "간단하게 자기소개를 해주세요. 본인의 강점과 지원동기를 포함하여 답변해주세요.",
      category: "인성면접",
      company: "네이버",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "JavaScript의 호이스팅에 대해 설명하세요",
      content: "JavaScript의 호이스팅(Hoisting) 개념과 var, let, const의 차이점에 대해 설명해주세요.",
      category: "기술면접",
      company: "카카오",
      createdAt: "2024-01-14"
    },
    // 나머지 8문제를 위한 더미 데이터
    ...Array.from({ length: 8 }, (_, index) => ({
      id: index + 3,
      title: `면접 질문 ${index + 3}`,
      content: `이것은 ${index + 3}번째 면접 질문입니다. 자세한 답변을 작성해주세요.`,
      category: index % 2 === 0 ? "인성면접" : "기술면접",
      company: companies[index % companies.length].name,
      createdAt: `2024-01-${10 + index}`
    }))
  ];

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    // TODO: 회사별 문제 10개 가져오기 API 호출
    const filteredProblems = sampleProblems.slice(0, 10);
    setProblems(filteredProblems);
    setCurrentProblemIndex(0);
    setUserAnswers(new Array(10).fill(''));
    setCurrentAnswer('');
    setIsCompleted(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // TODO: 카테고리별 문제 10개 가져오기 API 호출
    const filteredProblems = sampleProblems.filter(p => p.category === category).slice(0, 10);
    // 10개가 안 되면 더미 데이터로 채우기
    while (filteredProblems.length < 10) {
      filteredProblems.push({
        id: filteredProblems.length + 100,
        title: `${category} 문제 ${filteredProblems.length + 1}`,
        content: `${category} 관련 면접 질문입니다. 자세한 답변을 작성해주세요.`,
        category,
        company: "일반",
        createdAt: "2024-01-15"
      });
    }
    setProblems(filteredProblems);
    setCurrentProblemIndex(0);
    setUserAnswers(new Array(10).fill(''));
    setCurrentAnswer('');
    setIsCompleted(false);
  };

  const handleAnswerChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswer = e.target.value;
    setCurrentAnswer(newAnswer);

    // 현재 문제의 답변을 저장
    const newAnswers = [...userAnswers];
    newAnswers[currentProblemIndex] = newAnswer;
    setUserAnswers(newAnswers);
  };

  const handleNextProblem = () => {
    if (currentProblemIndex < problems.length - 1) {
      const nextIndex = currentProblemIndex + 1;
      setCurrentProblemIndex(nextIndex);
      setCurrentAnswer(userAnswers[nextIndex] || '');
    }
  };

  const handlePrevProblem = () => {
    if (currentProblemIndex > 0) {
      const prevIndex = currentProblemIndex - 1;
      setCurrentProblemIndex(prevIndex);
      setCurrentAnswer(userAnswers[prevIndex] || '');
    }
  };

  const handleSubmitAll = async () => {
    // TODO: 모든 답변 제출 API 호출
    console.log('모든 답변 제출:', {
      company: selectedCompany?.name,
      category: selectedCategory,
      answers: userAnswers
    });

    setIsCompleted(true);
  };

  const handleReset = () => {
    setSelectedMode(null);
    setSelectedCompany(null);
    setSelectedCategory('');
    setProblems([]);
    setCurrentProblemIndex(0);
    setUserAnswers([]);
    setCurrentAnswer('');
    setIsCompleted(false);
  };

  return (
    <S.Container>
      <S.PageTitle>문제 풀기</S.PageTitle>

      {!selectedMode ? (
        // 모드 선택 화면
        <S.ModeSelection>
          <S.ModeCard onClick={() => setSelectedMode('company')}>
            <S.ModeIcon>🏢</S.ModeIcon>
            <S.ModeTitle>회사별 문제</S.ModeTitle>
            <S.ModeDescription>특정 회사의 면접 문제 10개를 연속으로 풉니다</S.ModeDescription>
          </S.ModeCard>

          <S.ModeCard onClick={() => setSelectedMode('category')}>
            <S.ModeIcon>📝</S.ModeIcon>
            <S.ModeTitle>카테고리별 문제</S.ModeTitle>
            <S.ModeDescription>인성면접 또는 기술면접 문제 10개를 연속으로 풉니다</S.ModeDescription>
          </S.ModeCard>
        </S.ModeSelection>
      ) : selectedMode === 'company' && !selectedCompany ? (
        // 회사 선택 화면
        <S.SelectionSection>
          <S.BackButton onClick={() => setSelectedMode(null)}>← 뒤로가기</S.BackButton>
          <S.SectionTitle>회사를 선택하세요</S.SectionTitle>
          <S.CompanyGrid>
            {companies.map((company) => (
              <S.CompanyCard key={company.id} onClick={() => handleCompanySelect(company)}>
                <S.CompanyName>{company.name}</S.CompanyName>
                <S.CompanyInfo>{company.problemCount}개 문제</S.CompanyInfo>
              </S.CompanyCard>
            ))}
          </S.CompanyGrid>
        </S.SelectionSection>
      ) : selectedMode === 'category' && !selectedCategory ? (
        // 카테고리 선택 화면
        <S.SelectionSection>
          <S.BackButton onClick={() => setSelectedMode(null)}>← 뒤로가기</S.BackButton>
          <S.SectionTitle>카테고리를 선택하세요</S.SectionTitle>
          <S.CategoryGrid>
            <S.CategoryCard onClick={() => handleCategorySelect('인성면접')}>
              <S.CategoryIcon>👥</S.CategoryIcon>
              <S.CategoryTitle>인성면접</S.CategoryTitle>
              <S.CategoryDescription>인성, 경험, 가치관 관련 질문</S.CategoryDescription>
            </S.CategoryCard>

            <S.CategoryCard onClick={() => handleCategorySelect('기술면접')}>
              <S.CategoryIcon>💻</S.CategoryIcon>
              <S.CategoryTitle>기술면접</S.CategoryTitle>
              <S.CategoryDescription>기술 지식, 코딩, 문제해결 관련 질문</S.CategoryDescription>
            </S.CategoryCard>
          </S.CategoryGrid>
        </S.SelectionSection>
      ) : problems.length > 0 ? (
        // 문제 풀이 화면
        <S.SolvingSection>
          <S.SolvingHeader>
            <S.BackButton onClick={handleReset}>← 처음으로</S.BackButton>
            <S.SolvingInfo>
              <S.SolvingTitle>
                {selectedCompany ? selectedCompany.name : selectedCategory}
              </S.SolvingTitle>
              <S.ProgressInfo>
                {currentProblemIndex + 1} / 10
              </S.ProgressInfo>
            </S.SolvingInfo>
          </S.SolvingHeader>

          <S.ProgressBar>
            <S.ProgressFill width={(currentProblemIndex + 1) * 10} />
          </S.ProgressBar>

          {!isCompleted ? (
            <S.ProblemSection>
              <S.ProblemCard>
                <S.ProblemHeader>
                  <S.ProblemTitle>{problems[currentProblemIndex]?.title}</S.ProblemTitle>
                  <S.ProblemMeta>
                    {problems[currentProblemIndex]?.category} • {problems[currentProblemIndex]?.company}
                  </S.ProblemMeta>
                </S.ProblemHeader>

                <S.ProblemContent>
                  {problems[currentProblemIndex]?.content}
                </S.ProblemContent>

                <S.AnswerSection>
                  <S.AnswerLabel>답변</S.AnswerLabel>
                  <S.AnswerTextarea
                    value={currentAnswer}
                    onChange={handleAnswerChange}
                    placeholder="답변을 작성해주세요..."
                  />
                </S.AnswerSection>

                <S.NavigationButtons>
                  <S.NavButton
                    onClick={handlePrevProblem}
                    disabled={currentProblemIndex === 0}
                  >
                    이전 문제
                  </S.NavButton>

                  {currentProblemIndex === problems.length - 1 ? (
                    <S.SubmitButton onClick={handleSubmitAll}>
                      모든 답변 제출
                    </S.SubmitButton>
                  ) : (
                    <S.NavButton
                      onClick={handleNextProblem}
                      primary
                    >
                      다음 문제
                    </S.NavButton>
                  )}
                </S.NavigationButtons>
              </S.ProblemCard>
            </S.ProblemSection>
          ) : (
            <S.CompletionSection>
              <S.CompletionIcon>🎉</S.CompletionIcon>
              <S.CompletionTitle>모든 문제를 완료했습니다!</S.CompletionTitle>
              <S.CompletionMessage>
                {selectedCompany ? selectedCompany.name : selectedCategory} 문제 10개를 모두 해결했습니다.
              </S.CompletionMessage>
              <S.RestartButton onClick={handleReset}>
                다시 풀기
              </S.RestartButton>
            </S.CompletionSection>
          )}
        </S.SolvingSection>
      ) : (
        <S.EmptyState>
          <S.EmptyStateIcon>📝</S.EmptyStateIcon>
          <S.EmptyStateText>문제를 불러오는 중입니다...</S.EmptyStateText>
        </S.EmptyState>
      )}
    </S.Container>
  );
}