import { useCallback } from 'react';
import customAxios from '../services/customAxios';
import { useUserStore } from '@/store/userStore';
import { useRouterWithNProgress } from '@/hooks/useRouterWithNProgress';

export function useAuth() {
  const router = useRouterWithNProgress();
  const { userInfo, isLoggedIn: storeIsLoggedIn, login, logout } = useUserStore();

  // 1단계: Google 인증 URL 받아서 이동
  const loginWithGoogle = useCallback(async () => {
    try {
      const response = await customAxios.get('/auth/oauth/google');
      const { authUrl } = response.data;
      window.location.href = authUrl;
    } catch (error) {
      console.error('Google 로그인 URL 요청 실패:', error);
    }
  }, []);

  // 2단계: Google에서 받은 code를 백엔드로 전송
  const handleGoogleCallback = useCallback(async (code: string, state?: string) => {
    try {
      const response = await customAxios.post('/auth/oauth/callback', {
        code,
        state
      });
      const accessToken = response.headers['authorization']?.replace('Bearer ', '');
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }
      const { user } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      login(user);
      // Refresh Token은 쿠키(HttpOnly)로 저장됨
      return user;
    } catch (error) {
      console.error('OAuth 콜백 처리 실패:', error);
      throw error;
    }
  }, [login]);

  // 로그인 상태 확인
  const isLoggedIn = useCallback(() => {
    return !!(localStorage.getItem('accessToken') && userInfo && userInfo.name);
  }, [userInfo]);

  // 관리자 권한 확인
  const isAdmin = useCallback((checkUser?: any) => {
    const targetUser = checkUser || userInfo;
    if (!targetUser) return false;
    return targetUser.id === 1 || (targetUser.email && targetUser.email.endsWith('@bssm.hs.kr'));
  }, [userInfo]);

  // 로그아웃
  const logoutAll = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    logout();
    router.push('/login');
  }, [router, logout]);

  return {
    user: userInfo,
    loginWithGoogle,
    handleGoogleCallback,
    isLoggedIn,
    isAdmin,
    logout: logoutAll
  };
}
