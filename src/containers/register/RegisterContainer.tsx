"use client";
import { useState, ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import * as S from './style';

interface ProblemFormData {
  title: string;
  content: string;
  category: string;
  tags: string[];
  company: string;
}

export default function RegisterContainer() {
  const [registrationType, setRegistrationType] = useState<'individual' | 'csv'>('individual');
  const [formData, setFormData] = useState<ProblemFormData>({
    title: '',
    content: '',
    category: '인성면접',
    tags: [],
    company: ''
  });

  const [tagInput, setTagInput] = useState('');
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const handleInputChange = (field: keyof ProblemFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (registrationType === 'csv') {
      if (!csvFile) {
        alert('CSV 파일을 선택해주세요.');
        return;
      }
      // TODO: CSV 파일 업로드 API 호출
      console.log('CSV 파일 업로드:', csvFile);
    } else {
      // TODO: 개별 문제 등록 API 호출
      console.log('개별 문제 등록:', formData);
    }

    // 성공 시 초기화
    setFormData({
      title: '',
      content: '',
      category: '인성면접',
      tags: [],
      company: ''
    });
    setCsvFile(null);
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
                CSV 형식: 제목, 내용, 카테고리(인성면접/기술면접), 태그(콤마로 구분), 회사명
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
            </S.FormRow>

            <S.FormGroup>
              <S.Label>태그</S.Label>
              <S.TagInputWrapper>
                <S.Input
                  type="text"
                  value={tagInput}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTagInput(e.target.value)}
                  placeholder="태그를 입력하고 추가 버튼을 클릭하세요"
                  onKeyPress={(e: KeyboardEvent) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                />
                <S.AddButton type="button" onClick={handleAddTag}>
                  추가
                </S.AddButton>
              </S.TagInputWrapper>

              <S.TagList>
                {formData.tags.map((tag, index) => (
                  <S.Tag key={index}>
                    {tag}
                    <S.TagRemoveButton onClick={() => handleRemoveTag(tag)}>
                      ×
                    </S.TagRemoveButton>
                  </S.Tag>
                ))}
              </S.TagList>
            </S.FormGroup>
          </S.IndividualSection>
        )}

        <S.SubmitButton type="submit">
          {registrationType === 'csv' ? 'CSV 파일 업로드' : '문제 등록'}
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}