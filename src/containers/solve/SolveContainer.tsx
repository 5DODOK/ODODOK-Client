"use client";
import { useState } from 'react';
import { useProblems } from '@/hooks/useProblems';
import { useFeedback } from '@/hooks/useFeedback';
import { useSubmitAnswers } from '@/hooks/useSubmitAnswers';
import { AnswerItem } from '@/services/problemService';
import * as S from './style';

// 카테고리 매핑 (name -> id)
const CATEGORY_MAP: Record<string, number> = {
  'back': 1,
  'front': 2,
  'design': 3,
  'security': 4,
  'bank': 5,
  'infra': 6,
  'ai': 7,
  'embedded': 8,
};

// 회사 매핑 (name -> id)
const COMPANY_MAP: Record<string, number> = {
  '마이다스IT': 1,
  '신한은행': 2,
  '블루바이저': 3,
  '아이디노': 4,
  '니더': 5,
  '라이너': 6,
  '핀다': 7,
  '브랜치앤바운드': 8,
  '아키스케치': 9,
  '샌드버그': 10,
  '후아': 11,
  '쏘카': 12,
  '씨메스': 13,
  '똑개': 14,
  '더스팟': 15,
  '지오영': 16,
  '라포랩스': 17,
  '서플라이스': 18,
  '잉카인터넷': 19,
  '미르니': 20,
  '드래프타입': 21,
  '달파': 22,
  '사이버다임': 23,
  'U2SR': 24,
  '우리웍스': 25,
  '큐오티': 26,
  '바카티오': 27,
  '리얼시큐': 28,
  '썬컴': 29,
  '공감오래컨텐츠': 59,
};

export default function SolveContainer() {
  // 문제 선택 state
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  // 문제 풀이 state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, string>>(new Map());
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [timesSpent, setTimesSpent] = useState<Map<number, number>>(new Map());
  const [totalStartTime, setTotalStartTime] = useState<number>(0);

  // 피드백 state
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<{ feedback: string; additionalTip: string } | null>(null);

  // 제출 완료 state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    message: string;
    score: number;
    correctAnswers: number;
    pointsEarned: number;
    rank: number;
  } | null>(null);

  // API 파라미터 (ID로 변환)
  const categoryId = category ? CATEGORY_MAP[category] : undefined;
  const companyId = company ? COMPANY_MAP[company] : undefined;

  // API 훅
  const { data: problemsData, isLoading } = useProblems({
    category: categoryId,
    company: companyId
  });
  const feedbackMutation = useFeedback();
  const submitMutation = useSubmitAnswers();

  const questions = problemsData?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];

  // 문제 시작
  const handleStart = () => {
    if (!category && !company) {
      alert('카테고리 또는 회사 중 하나를 선택해주세요');
      return;
    }
    setHasStarted(true);
    setTotalStartTime(Date.now());
    setQuestionStartTime(Date.now());
  };

  // 답변 제출 및 피드백 받기
  const handleSubmitAnswer = async () => {
    if (!currentAnswer.trim()) {
      alert('답변을 입력해주세요');
      return;
    }

    // 시간 기록
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    setTimesSpent(new Map(timesSpent.set(currentQuestion.questionId, timeSpent)));
    setAnswers(new Map(answers.set(currentQuestion.questionId, currentAnswer)));

    // 피드백 요청
    feedbackMutation.mutate({
      userAnswer: currentAnswer,
      question: currentQuestion.question,
    }, {
      onSuccess: (feedback) => {
        setCurrentFeedback(feedback);
        setShowFeedback(true);
      },
      onError: (error) => {
        console.error('피드백 요청 실패:', error);
        alert('피드백을 받는데 실패했습니다');
      }
    });
  };

  // 다음 문제로
  const handleNext = () => {
    setShowFeedback(false);
    setCurrentFeedback(null);
    setCurrentAnswer('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionStartTime(Date.now());
    } else {
      // 마지막 문제면 최종 제출
      handleFinalSubmit();
    }
  };

  // 최종 제출
  const handleFinalSubmit = async () => {
    const totalTimeSpent = Math.floor((Date.now() - totalStartTime) / 1000);

    const answersList: AnswerItem[] = questions.map((q) => ({
      questionId: q.questionId,
      answer: answers.get(q.questionId) || '',
      timeSpent: timesSpent.get(q.questionId) || 0,
    }));

    try {
      const result = await submitMutation.mutateAsync({
        answers: answersList,
        totalTimeSpent,
        submittedAt: new Date().toISOString(),
      });
      setSubmitResult(result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('최종 제출 실패:', error);
      alert('제출에 실패했습니다');
    }
  };

  // 제출 완료 화면
  if (isSubmitted && submitResult) {
    return (
      <S.Container>
        <S.CompletionSection>
          <S.CompletionIcon>�</S.CompletionIcon>
          <S.CompletionTitle>{submitResult.message}</S.CompletionTitle>
          <S.ResultStats>
            <S.StatItem>
              <S.StatLabel>점수</S.StatLabel>
              <S.StatValue>{submitResult.score}점</S.StatValue>
            </S.StatItem>
            <S.StatItem>
              <S.StatLabel>정답 수</S.StatLabel>
              <S.StatValue>{submitResult.correctAnswers} / {questions.length}</S.StatValue>
            </S.StatItem>
            <S.StatItem>
              <S.StatLabel>획득 포인트</S.StatLabel>
              <S.StatValue>{submitResult.pointsEarned}P</S.StatValue>
            </S.StatItem>
            <S.StatItem>
              <S.StatLabel>랭킹</S.StatLabel>
              <S.StatValue>{submitResult.rank}위</S.StatValue>
            </S.StatItem>
          </S.ResultStats>
          <S.NavigationButtons>
            <S.NavButton onClick={() => window.location.reload()}>다시 풀기</S.NavButton>
            <S.NavButton primary onClick={() => window.location.href = '/rank'}>랭킹 보기</S.NavButton>
          </S.NavigationButtons>
        </S.CompletionSection>
      </S.Container>
    );
  }

  // 문제 풀이 화면
  if (hasStarted && questions.length > 0) {
    return (
      <S.Container>
        <S.SolvingHeader>
          <S.ProgressInfo>
            문제 {currentQuestionIndex + 1} / {questions.length}
          </S.ProgressInfo>
          <S.SolvingInfo>
            {Math.floor((Date.now() - questionStartTime) / 1000)}초 경과
          </S.SolvingInfo>
        </S.SolvingHeader>

        <S.ProblemCard>
          <S.ProblemHeader>
            <S.ProblemTitle>Q{currentQuestionIndex + 1}</S.ProblemTitle>
          </S.ProblemHeader>
          <S.ProblemContent>{currentQuestion?.question}</S.ProblemContent>

          <S.AnswerSection>
            <S.AnswerLabel>답변</S.AnswerLabel>
            <S.AnswerTextarea
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="답변을 입력하세요..."
              disabled={showFeedback}
            />
          </S.AnswerSection>

          {!showFeedback && !feedbackMutation.isPending && (
            <S.NavigationButtons>
              <S.NavButton onClick={handleSubmitAnswer} disabled={!currentAnswer.trim()} primary>
                답변 제출
              </S.NavButton>
            </S.NavigationButtons>
          )}

          {feedbackMutation.isPending && (
            <S.LoadingSection>
              <S.Spinner />
              <S.LoadingText>AI가 답변을 분석하고 피드백을 생성하고 있습니다...</S.LoadingText>
              <S.LoadingSubText>잠시만 기다려주세요 (약 5-10초 소요)</S.LoadingSubText>
            </S.LoadingSection>
          )}

          {showFeedback && currentFeedback && !feedbackMutation.isPending && (
            <S.FeedbackSection>
              <S.FeedbackTitle>💡 AI 피드백</S.FeedbackTitle>
              <S.FeedbackText>{currentFeedback.feedback}</S.FeedbackText>
              {currentFeedback.additionalTip && (
                <S.FeedbackText>
                  <strong>TIP:</strong> {currentFeedback.additionalTip}
                </S.FeedbackText>
              )}
              <S.NavigationButtons>
                <S.NavButton primary onClick={handleNext}>
                  {currentQuestionIndex < questions.length - 1 ? '다음 문제' : '제출하기'}
                </S.NavButton>
              </S.NavigationButtons>
            </S.FeedbackSection>
          )}
        </S.ProblemCard>
      </S.Container>
    );
  }

  // 시작 화면
  return (
    <S.PageWrapper>
      <S.Container>
        <S.PageTitle>문제 풀기</S.PageTitle>
        <S.SelectionSection>
          <S.SectionTitle>
            카테고리 또는 회사를 선택하면 총 10문제가 제공됩니다.
            <br />
            각 문제마다 AI 피드백을 받을 수 있습니다.
          </S.SectionTitle>

          <S.SelectGroup>
            <S.SelectLabel>카테고리 (선택)</S.SelectLabel>
            <S.Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">선택하지 않음</option>
              <option value="back">백엔드</option>
              <option value="front">프론트엔드</option>
              <option value="design">디자인</option>
              <option value="security">보안</option>
              <option value="bank">은행/금융</option>
              <option value="infra">인프라</option>
              <option value="ai">AI/머신러닝</option>
              <option value="embedded">임베디드</option>
          </S.Select>
          </S.SelectGroup>

          <S.SelectGroup>
            <S.SelectLabel>회사 (선택)</S.SelectLabel>
            <S.Select value={company} onChange={(e) => setCompany(e.target.value)}>
              <option value="">선택하지 않음</option>
              <option value="마이다스IT">마이다스IT</option>
              <option value="신한은행">신한은행</option>
              <option value="블루바이저">블루바이저</option>
              <option value="아이디노">아이디노</option>
              <option value="니더">니더</option>
              <option value="라이너">라이너</option>
              <option value="핀다">핀다</option>
              <option value="브랜치앤바운드">브랜치앤바운드</option>
              <option value="아키스케치">아키스케치</option>
              <option value="샌드버그">샌드버그</option>
              <option value="후아">후아</option>
              <option value="쏘카">쏘카</option>
              <option value="씨메스">씨메스</option>
              <option value="똑개">똑개</option>
              <option value="더스팟">더스팟</option>
              <option value="지오영">지오영</option>
              <option value="라포랩스">라포랩스</option>
              <option value="서플라이스">서플라이스</option>
              <option value="잉카인터넷">잉카인터넷</option>
              <option value="미르니">미르니</option>
              <option value="드래프타입">드래프타입</option>
              <option value="달파">달파</option>
              <option value="사이버다임">사이버다임</option>
              <option value="U2SR">U2SR</option>
              <option value="우리웍스">우리웍스</option>
              <option value="큐오티">큐오티</option>
              <option value="바카티오">바카티오</option>
              <option value="리얼시큐">리얼시큐</option>
              <option value="썬컴">썬컴</option>
              <option value="공감오래컨텐츠">공감오래컨텐츠</option>
            </S.Select>
          </S.SelectGroup>

          {isLoading && (
            <S.LoadingSection>
              <S.Spinner />
              <S.LoadingText>문제를 불러오는 중입니다...</S.LoadingText>
            </S.LoadingSection>
          )}

          <S.NavigationButtons>
            <S.NavButton primary onClick={handleStart} disabled={(!category && !company) || isLoading}>
              {isLoading ? '문제 불러오는 중...' : '시작하기'}
            </S.NavButton>
          </S.NavigationButtons>
        </S.SelectionSection>
      </S.Container>
    </S.PageWrapper>
  );
}