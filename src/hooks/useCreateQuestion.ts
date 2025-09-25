import { useMutation } from '@tanstack/react-query';
import { createQuestion, CreateQuestionPayload } from '@/services/questionService';

export interface CreateQuestionVariables {
  payload: CreateQuestionPayload;
  token: string;
}

export function useCreateQuestion() {
  return useMutation({
    mutationFn: async ({ payload, token }: CreateQuestionVariables) => {
      return await createQuestion(payload, token);
    },
  });
}
