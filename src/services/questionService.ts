import customAxios from './customAxios';

export interface CreateQuestionPayload {
  question: string;
  interviewType: '기술면접' | '인성면접';
  difficulty?: 'EASY' | 'MEDIUM' | 'HARD';
  year?: number;
  companyName?: string;
  categoryId?: number;
}

export async function createQuestion(payload: CreateQuestionPayload, token: string) {
  const res = await customAxios.post('/question', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function uploadQuestionCsv(file: File, token: string, dryRun = false) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('dry_run', String(dryRun));
  const res = await customAxios.post('/question/csv', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
}

export interface SearchQuestionParams {
  year?: number;
  company_id?: number;
  company_name?: string;
  category_id?: number;
  interview_type?: string;
  sort?: 'new' | 'old';
  page?: number;
  size?: number;
}

export interface SearchQuestionResult {
  type: 'question';
  id: number;
  question: string;
  year: number;
  companyName: string;
  categoryId: number;
  categoryName: string;
  interviewType: string;
  difficulty: number;
  difficultyLabel: 'EASY' | 'MEDIUM' | 'HARD';
  createdAt: string;
}

export interface SearchQuestionResponse {
  query: {
    category_id: number | null;
    year: number | null;
    company_name: string | null;
    interview_type: string | null;
    sort: string;
  };
  page: number;
  size: number;
  total: number;
  results: SearchQuestionResult[];
  facets: {
    year: Array<{ value: number; count: number }>;
    interview_type: Array<{ name: string; count: number }>;
    company: Array<{ id: number; name: string; count: number }>;
    category: Array<{ id: number; name: string; count: number }>;
  };
}

export async function searchQuestions(params: SearchQuestionParams, token?: string) {
  const config = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : {};

  const res = await customAxios.get<SearchQuestionResponse>('/search', {
    params,
    ...config,
  });
  return res.data;
}

// 질문 수정
export interface UpdateQuestionPayload {
  question?: string;
  difficulty?: 'EASY' | 'MEDIUM' | 'HARD';
  year?: number;
  companyName?: string;
  categoryId?: number;
  interviewType?: '기술면접' | '인성면접';
}

export async function updateQuestion(id: number, payload: UpdateQuestionPayload, token: string) {
  const res = await customAxios.patch(`/question/${id}`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

// 질문 삭제
export async function deleteQuestion(id: number, token: string) {
  const res = await customAxios.delete(`/question/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}
