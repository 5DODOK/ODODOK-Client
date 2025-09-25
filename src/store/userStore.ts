import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserInfo {
  id: number;
  name: string;
  email: string;
  profileImageUrl: string;
}

interface UserState {
  isLoggedIn: boolean;
  userInfo: UserInfo;
  login: (userInfo: UserInfo) => void;
  logout: () => void;
  updateUserInfo: (userInfo: Partial<UserInfo>) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userInfo: {
        id: 0,
        name: '',
        email: '',
        profileImageUrl: ''
      },
      login: (userInfo: UserInfo) =>
        set({
          isLoggedIn: true,
          userInfo
        }),
      logout: () =>
        set({
          isLoggedIn: false,
          userInfo: { id: 0, name: '', email: '', profileImageUrl: '' }
        }),
      updateUserInfo: (newUserInfo: Partial<UserInfo>) =>
        set((state) => ({
          userInfo: { ...state.userInfo, ...newUserInfo }
        })),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        userInfo: state.userInfo
      }),
    }
  )
);