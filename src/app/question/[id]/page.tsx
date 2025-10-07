"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as S from './style';
import { useRouterWithNProgress } from '@/hooks/useRouterWithNProgress';

interface QuestionData {
  id: number;
  question: string;
  year: number;
  companyName: string;
  categoryName: string;
  interviewType: string;
  difficulty: number;
  difficultyLabel: 'EASY' | 'MEDIUM' | 'HARD';
  createdAt: string;
}

export default function QuestionDetailPage() {
  const router = useRouterWithNProgress();
  const params = useParams();
  const questionId = params.id;
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);

  useEffect(() => {
    // localStorage에서 질문 데이터 가져오기
    const savedQuestion = localStorage.getItem('currentQuestion');
    if (savedQuestion) {
      try {
        setQuestionData(JSON.parse(savedQuestion));
      } catch (e) {
        console.error('Failed to parse question data:', e);
      }
    }
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return '#10b981';
      case 'MEDIUM': return '#f59e0b';
      case 'HARD': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return '쉬움';
      case 'MEDIUM': return '보통';
      case 'HARD': return '어려움';
      default: return difficulty;
    }
  };

  if (!questionData) {
    return (
      <S.Container>
        <S.BackButton onClick={() => router.back()}>
          ← 뒤로 가기
        </S.BackButton>
        <S.InfoBox>
          <S.InfoText>질문 정보를 불러올 수 없습니다.</S.InfoText>
          <S.InfoText>검색 페이지에서 다시 선택해주세요.</S.InfoText>
        </S.InfoBox>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.BackButton onClick={() => router.back()}>
        ← 뒤로 가기
      </S.BackButton>

      <S.QuestionSection>
        <S.QuestionHeader>
          <S.HeaderTop>
            <S.QuestionTitle>{questionData.question}</S.QuestionTitle>
            <S.Difficulty color={getDifficultyColor(questionData.difficultyLabel)}>
              {getDifficultyText(questionData.difficultyLabel)}
            </S.Difficulty>
          </S.HeaderTop>
        </S.QuestionHeader>

        <S.MetaSection>
          <S.MetaGrid>
            <S.MetaItem>
              <S.MetaLabel>회사</S.MetaLabel>
              <S.MetaValue>{questionData.companyName}</S.MetaValue>
            </S.MetaItem>
            <S.MetaItem>
              <S.MetaLabel>연도</S.MetaLabel>
              <S.MetaValue>{questionData.year}년</S.MetaValue>
            </S.MetaItem>
            <S.MetaItem>
              <S.MetaLabel>카테고리</S.MetaLabel>
              <S.MetaValue>{questionData.categoryName}</S.MetaValue>
            </S.MetaItem>
            <S.MetaItem>
              <S.MetaLabel>면접 유형</S.MetaLabel>
              <S.MetaValue>{questionData.interviewType}</S.MetaValue>
            </S.MetaItem>
            <S.MetaItem>
              <S.MetaLabel>작성일</S.MetaLabel>
              <S.MetaValue>{new Date(questionData.createdAt).toLocaleDateString()}</S.MetaValue>
            </S.MetaItem>
          </S.MetaGrid>
        </S.MetaSection>

        <S.AnswerSection>
          <S.SectionTitle>답변 작성</S.SectionTitle>
          <S.InfoBox>
            <S.InfoText>답변 기능은 추후 추가 예정입니다.</S.InfoText>
          </S.InfoBox>
        </S.AnswerSection>
      </S.QuestionSection>
    </S.Container>
  );
}
