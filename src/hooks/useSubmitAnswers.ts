import { useMutation } from '@tanstack/react-query';
import { submitAnswers, SubmitAnswersRequest } from '@/services/problemService';

export function useSubmitAnswers() {
  return useMutation({
    mutationFn: (data: SubmitAnswersRequest) => submitAnswers(data),
  });
}
