"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import customAxios from '@/services/customAxios';
import { useUserStore } from '@/store/userStore';
import { useRouterWithNProgress } from '@/hooks/useRouterWithNProgress';

export default function OAuthCallbackPage() {
  const router = useRouterWithNProgress();
  const searchParams = useSearchParams();
  const [error, setError] = useState('');
  const login = useUserStore((state) => state.login);

  useEffect(() => {
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const errorParam = searchParams.get('error');

    if (errorParam) {
      setError(`로그인 실패: ${errorParam}`);
      return;
    }

    if (!code) {
      setError('인증 코드가 필요합니다.');
      return;
    }

    (async () => {
      try {
        const response = await customAxios.post('/auth/oauth/google/callback', { code, state });

        const accessToken = response.headers['authorization']?.replace('Bearer ', '');
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
        }

        const { user } = response.data;
        if (user) {
          // profileImageUrl이 진짜 이미지 URL인지 체크
          let profileImageUrl = '';
          if (user.profileImageUrl &&
            (user.profileImageUrl.startsWith('http') || user.profileImageUrl.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i))) {
            profileImageUrl = user.profileImageUrl;
          } else if (user.avatar &&
            (user.avatar.startsWith('http') || user.avatar.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i))) {
            profileImageUrl = user.avatar;
          }
          const userForStore = {
            ...user,
            profileImageUrl
          };
          localStorage.setItem('user', JSON.stringify(userForStore));
          login(userForStore); // zustand store에 즉시 반영
        }

        router.replace('/');

      } catch (e: any) {
        console.error('OAuth 콜백 처리 실패:', e);
        setError(e?.response?.data?.message || '로그인 처리 중 오류가 발생했습니다.');
      }
    })();
  }, [searchParams, router, login]);

  if (error) {
    return (
      <div style={{
        color: 'red',
        textAlign: 'center',
        marginTop: 40,
        padding: '20px'
      }}>
        {error}
        <br />
        <button
          onClick={() => router.push('/login')}
          style={{ marginTop: '10px', padding: '8px 16px' }}
        >
          로그인 페이지로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <div>로그인 처리중...</div>
      <div style={{ marginTop: '10px' }}>잠시만 기다려주세요.</div>
    </div>
  );
}