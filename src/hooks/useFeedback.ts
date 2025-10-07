import { useMutation } from '@tanstack/react-query';
import { getFeedback, FeedbackRequest } from '@/services/problemService';

export function useFeedback() {
  return useMutation({
    mutationFn: (data: FeedbackRequest) => getFeedback(data),
  });
}
