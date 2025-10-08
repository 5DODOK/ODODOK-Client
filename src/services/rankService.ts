import customAxios from './customAxios';

export interface RankUser {
  rank: number;
  username: string;
  points: number;
  profileImageUrl?: string;
}

export interface RankResponse {
  rankings: RankUser[];
  currentUser?: RankUser;
}

export async function fetchRankings(token?: string): Promise<RankResponse> {
  const res = await customAxios.get('/rank', {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return res.data;
}
