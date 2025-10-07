import { useQuery } from '@tanstack/react-query';
import { getProblems, GetProblemsParams } from '@/services/problemService';

export function useProblems(params: GetProblemsParams) {
  return useQuery({
    queryKey: ['problems', params],
    queryFn: () => getProblems(params),
    enabled: !!(params.category || params.company), // 카테고리나 회사가 선택되어야 조회
  });
}
