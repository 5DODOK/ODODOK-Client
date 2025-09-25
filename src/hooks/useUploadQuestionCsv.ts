import { useMutation } from '@tanstack/react-query';
import { uploadQuestionCsv } from '@/services/questionService';

export function useUploadQuestionCsv() {
  return useMutation({
    mutationFn: async ({ file, token, dryRun = false }: { file: File; token: string; dryRun?: boolean }) => {
      return await uploadQuestionCsv(file, token, dryRun);
    },
  });
}
