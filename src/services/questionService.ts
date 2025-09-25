import customAxios from './customAxios';

export interface CreateQuestionPayload {
  question: string;
  difficulty?: 'EASY' | 'MEDIUM' | 'HARD';
  year?: number;
  company_id?: number;
  category_id?: number;
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
