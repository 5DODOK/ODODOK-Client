"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import * as S from './style';
import { useCreateQuestion } from '@/hooks/useCreateQuestion';
import { useUserStore } from '@/store/userStore';
import { useUploadQuestionCsv } from '@/hooks/useUploadQuestionCsv';

// 카테고리 매핑
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

interface ProblemFormData {
  title: string;
  content: string;
  interviewType: '기술면접' | '인성면접';
  company: string;
  categoryId: string;
  year: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

export default function RegisterContainer() {
  const [registrationType, setRegistrationType] = useState<'individual' | 'csv'>('individual');
  const [formData, setFormData] = useState<ProblemFormData>({
    title: '',
    content: '',
    interviewType: '기술면접',
    company: '',
    categoryId: '',
    year: '',
    difficulty: 'MEDIUM'
  });

  const [csvFile, setCsvFile] = useState<File | null>(null);
  const { userInfo } = useUserStore();
  const createQuestionMutation = useCreateQuestion();
  const uploadQuestionCsvMutation = useUploadQuestionCsv();

  // @bssm.hs.kr 이메일이면 관리자로 판단
  const isAdmin = userInfo?.email?.endsWith('@bssm.hs.kr') || false;

  // 관리자 권한 체크
  if (!isAdmin && typeof window !== 'undefined') {
    return (
      <S.PageWrapper>
        <S.Container>
          <S.PageTitle>접근 권한 없음</S.PageTitle>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
              이 페이지는 관리자만 접근할 수 있습니다.
            </p>
            <p style={{ fontSize: '14px', color: '#999' }}>
              (@bssm.hs.kr 이메일로 로그인 필요)
            </p>
          </div>
        </S.Container>
      </S.PageWrapper>
    );
  }

  const handleInputChange = (field: keyof ProblemFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (registrationType === 'csv') {
      if (!csvFile) {
        alert('CSV 파일을 선택해주세요.');
        return;
      }
      const token = localStorage.getItem('accessToken') || '';
      uploadQuestionCsvMutation.mutate(
        { file: csvFile, token },
        {
          onSuccess: (data) => {
            alert('CSV 업로드가 완료되었습니다!\n' +
              `총 ${data.summary.totalRows}건, 생성 ${data.summary.created}건, 수정 ${data.summary.updated}건, 건너뜀 ${data.summary.skipped}건`);
            setCsvFile(null);
          },
          onError: (err: unknown) => {
            const errorMessage = err && typeof err === 'object' && 'response' in err
              ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message)
              : undefined;
            if (errorMessage) {
              alert(errorMessage);
            } else {
              alert('CSV 업로드 중 오류가 발생했습니다.');
            }
          }
        }
      );
      return;
    } else {
      // 단건 문제 등록 (리액트 쿼리)
      if (!formData.title.trim()) {
        alert('문제 제목은 필수입니다.');
        return;
      }
      if (formData.title.length > 200) {
        alert('문제 제목은 200자 이내여야 합니다.');
        return;
      }
      if (!userInfo) {
        alert('로그인이 필요합니다.');
        return;
      }
      const payload: {
        question: string;
        interviewType: '기술면접' | '인성면접';
        difficulty: 'EASY' | 'MEDIUM' | 'HARD';
        year?: number;
        companyName?: string;
        categoryId?: number;
      } = {
        question: formData.title,
        interviewType: formData.interviewType,
        difficulty: formData.difficulty
      };

      if (formData.year) {
        const yearNum = parseInt(formData.year);
        if (!isNaN(yearNum) && yearNum >= 2000) {
          payload.year = yearNum;
        }
      }

      if (formData.company.trim()) {
        payload.companyName = formData.company;
      }

      if (formData.categoryId) {
        // 카테고리 문자열을 ID로 변환
        const categoryIdNum = CATEGORY_MAP[formData.categoryId];
        if (categoryIdNum) {
          payload.categoryId = categoryIdNum;
        }
      }

      const token = localStorage.getItem('accessToken') || '';
      createQuestionMutation.mutate(
        { payload, token },
        {
          onSuccess: () => {
            alert('문제 등록이 완료되었습니다!');
            setFormData({
              title: '',
              content: '',
              interviewType: '기술면접',
              company: '',
              categoryId: '',
              year: '',
              difficulty: 'MEDIUM'
            });
            setCsvFile(null);
          },
          onError: (err: unknown) => {
            const errorMessage = err && typeof err === 'object' && 'response' in err
              ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message)
              : undefined;
            if (errorMessage) {
              alert(errorMessage);
            } else {
              alert('문제 등록 중 오류가 발생했습니다.');
            }
          }
        }
      );
    }
  };

  const handleCsvUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setCsvFile(file);
    } else {
      alert('CSV 파일만 업로드 가능합니다.');
      e.target.value = '';
    }
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.PageTitle>문제 등록</S.PageTitle>

        <S.TypeSelector>
          <S.TypeButton
            active={registrationType === 'individual'}
            onClick={() => setRegistrationType('individual')}
          >
            개별 문제 등록
          </S.TypeButton>
          <S.TypeButton
            active={registrationType === 'csv'}
            onClick={() => setRegistrationType('csv')}
          >
            CSV 파일 등록
          </S.TypeButton>
        </S.TypeSelector>

        {registrationType === 'csv' && (
          <div style={{ marginBottom: 16 }}>
            <a href="/sample-question.csv" download style={{ color: '#0070f3', textDecoration: 'underline', fontWeight: 500 }}>
              샘플 파일 내려받기
            </a>
          </div>
        )}

        <S.Form onSubmit={handleSubmit}>
          {registrationType === 'csv' ? (
            <S.CsvSection>
              <S.FormGroup>
                <S.Label>CSV 파일 업로드</S.Label>
                <S.FileInput
                  type="file"
                  accept=".csv"
                  onChange={handleCsvUpload}
                  required
                />
                <S.FileHelperText>
                  CSV 형식: 제목, 내용, 카테고리(인성면접/기술면접), 회사명
                </S.FileHelperText>
                {csvFile && (
                  <S.SelectedFile>
                    선택된 파일: {csvFile.name}
                  </S.SelectedFile>
                )}
              </S.FormGroup>
            </S.CsvSection>
          ) : (
            <S.IndividualSection>
              <S.FormGroup>
                <S.Label>질문 내용 <span style={{ color: '#ef4444' }}>*</span></S.Label>
                <S.Input
                  type="text"
                  value={formData.title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
                  placeholder="질문 내용을 입력하세요 (최대 500자)"
                  maxLength={500}
                  required
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>면접 타입 <span style={{ color: '#ef4444' }}>*</span></S.Label>
                <S.Select
                  value={formData.interviewType}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => handleInputChange('interviewType', e.target.value as '기술면접' | '인성면접')}
                  required
                >
                  <option value="기술면접">기술면접</option>
                  <option value="인성면접">인성면접</option>
                </S.Select>
              </S.FormGroup>

              <S.FormRow>
                <S.FormGroup>
                  <S.Label>난이도</S.Label>
                  <S.Select
                    value={formData.difficulty}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleInputChange('difficulty', e.target.value as 'EASY' | 'MEDIUM' | 'HARD')}
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
                    value={formData.year}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('year', e.target.value)}
                    placeholder="예: 2024"
                    min={2000}
                  />
                </S.FormGroup>
              </S.FormRow>

              <S.FormRow>
                <S.FormGroup>
                  <S.Label>회사명</S.Label>
                  <S.Input
                    type="text"
                    value={formData.company}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('company', e.target.value)}
                    placeholder="예: 카카오, 네이버 (최대 100자)"
                    maxLength={100}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <S.Label>카테고리</S.Label>
                  <S.Select
                    value={formData.categoryId}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => handleInputChange('categoryId', e.target.value)}
                  >
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
                </S.FormGroup>
              </S.FormRow>
            </S.IndividualSection>
          )}

          <S.SubmitButton type="submit">
            {registrationType === 'csv' ? 'CSV 파일 업로드' : '문제 등록'}
          </S.SubmitButton>
        </S.Form>
      </S.Container>
    </S.PageWrapper>
  );
}