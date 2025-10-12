import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateQuestion, UpdateQuestionPayload } from '@/services/questionService';

interface UpdateQuestionParams {
  id: number;
  payload: UpdateQuestionPayload;
  token: string;
}

export function useUpdateQuestion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload, token }: UpdateQuestionParams) =>
      updateQuestion(id, payload, token),
    onSuccess: () => {
      // 검색 결과 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['searchQuestions'] });
    },
  });
}
