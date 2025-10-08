"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import * as S from './style';
import { useCreateQuestion } from '@/hooks/useCreateQuestion';
import { useUserStore } from '@/store/userStore';
import { useUploadQuestionCsv } from '@/hooks/useUploadQuestionCsv';

interface ProblemFormData {
  title: string;
  content: string;
  category: string;
  company: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

export default function RegisterContainer() {
  const [registrationType, setRegistrationType] = useState<'individual' | 'csv'>('individual');
  const [formData, setFormData] = useState<ProblemFormData>({
    title: '',
    content: '',
    category: '인성면접',
    company: '',
    difficulty: 'MEDIUM'
  });

  const [csvFile, setCsvFile] = useState<File | null>(null);
  const { userInfo } = useUserStore();
  const createQuestionMutation = useCreateQuestion();
  const uploadQuestionCsvMutation = useUploadQuestionCsv();

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
      const payload = {
        question: formData.title,
        difficulty: formData.difficulty,
        year: undefined as number | undefined,
        company_id: undefined as number | undefined,
        category_id: undefined as number | undefined,
        content: undefined as string | undefined
      };
      if (formData.company) payload.company_id = 3; // TODO: 회사명->id 매핑 필요
      if (formData.category) payload.category_id = 12; // TODO: 카테고리명->id 매핑 필요
      if (formData.content) payload.content = formData.content;
      const token = localStorage.getItem('accessToken') || '';
      createQuestionMutation.mutate(
        { payload, token },
        {
          onSuccess: () => {
            alert('문제 등록이 완료되었습니다!');
            setFormData({
              title: '',
              content: '',
              category: '인성면접',
              company: '',
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
              <S.Label>문제 제목</S.Label>
              <S.Input
                type="text"
                value={formData.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('title', e.target.value)}
                placeholder="문제 제목을 입력하세요"
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>문제 내용</S.Label>
              <S.Textarea
                value={formData.content}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('content', e.target.value)}
                placeholder="문제 내용을 입력하세요"
                required
              />
            </S.FormGroup>

            <S.FormRow>
              <S.FormGroup>
                <S.Label>카테고리</S.Label>
                <S.Select
                  value={formData.category}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => handleInputChange('category', e.target.value)}
                >
                  <option value="인성면접">인성면접</option>
                  <option value="기술면접">기술면접</option>
                </S.Select>
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>회사명</S.Label>
                <S.Input
                  type="text"
                  value={formData.company}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('company', e.target.value)}
                  placeholder="예: 네이버, 카카오, 삼성"
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>난이도</S.Label>
                <S.Select
                  value={formData.difficulty}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => handleInputChange('difficulty', e.target.value as 'EASY' | 'MEDIUM' | 'HARD')}
                >
                  <option value="EASY">EASY</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="HARD">HARD</option>
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
  );
}