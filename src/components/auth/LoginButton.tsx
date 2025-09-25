"use client";
import React from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function LoginButton() {
  const { loginWithGoogle } = useAuth();
  return (
    <button onClick={loginWithGoogle} style={{
      padding: '12px 24px',
      background: '#111',
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      fontWeight: 600,
      cursor: 'pointer',
      fontSize: 16
    }}>
      로그인
    </button>
  );
}
