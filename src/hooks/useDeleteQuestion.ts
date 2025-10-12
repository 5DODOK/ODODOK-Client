import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteQuestion } from '@/services/questionService';

interface DeleteQuestionParams {
  id: number;
  token: string;
}

export function useDeleteQuestion() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, token }: DeleteQuestionParams) =>
      deleteQuestion(id, token),
    onSuccess: () => {
      // 검색 결과 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['searchQuestions'] });
    },
  });
}
