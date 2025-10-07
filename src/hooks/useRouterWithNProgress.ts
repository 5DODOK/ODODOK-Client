import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import NProgress from 'nprogress';

export function useRouterWithNProgress() {
  const router = useRouter();

  const push = useCallback((href: string) => {
    NProgress.start();
    router.push(href);
    // Next.js App Router는 navigation 완료를 감지하기 어려우므로 짧은 지연 후 종료
    setTimeout(() => {
      NProgress.done();
    }, 300);
  }, [router]);

  const replace = useCallback((href: string) => {
    NProgress.start();
    router.replace(href);
    setTimeout(() => {
      NProgress.done();
    }, 300);
  }, [router]);

  const back = useCallback(() => {
    NProgress.start();
    router.back();
    setTimeout(() => {
      NProgress.done();
    }, 300);
  }, [router]);

  const forward = useCallback(() => {
    NProgress.start();
    router.forward();
    setTimeout(() => {
      NProgress.done();
    }, 300);
  }, [router]);

  const refresh = useCallback(() => {
    NProgress.start();
    router.refresh();
    setTimeout(() => {
      NProgress.done();
    }, 300);
  }, [router]);

  return {
    push,
    replace,
    back,
    forward,
    refresh,
    prefetch: router.prefetch,
  };
}
