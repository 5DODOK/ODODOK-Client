import { useQuery } from '@tanstack/react-query';
import customAxios from '../services/customAxios';

const fetchUser = async () => {
  const { data } = await customAxios.get('/user/me');
  return data;
};

export function useUserQuery() {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
}