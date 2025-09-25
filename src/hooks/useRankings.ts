import { useQuery } from '@tanstack/react-query';
import { fetchRankings } from '@/services/rankService';

export function useRankings(token?: string) {
  return useQuery({
    queryKey: ['rankings'],
    queryFn: () => fetchRankings(token),
  });
}
