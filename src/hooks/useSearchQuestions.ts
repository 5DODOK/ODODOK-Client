import { useQuery } from '@tanstack/react-query';
import { searchQuestions, SearchQuestionParams } from '@/services/questionService';

export interface UseSearchQuestionsOptions {
  params: SearchQuestionParams;
  token?: string;
  enabled?: boolean;
}

export function useSearchQuestions({ params, token, enabled = true }: UseSearchQuestionsOptions) {
  return useQuery({
    queryKey: ['searchQuestions', params],
    queryFn: () => searchQuestions(params, token),
    enabled,
    staleTime: 1000 * 60, // 1분간 캐시 유지
  });
}
