import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserInfo {
  name: string;
  avatar: string;
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
        name: '',
        avatar: ''
      },
      login: (userInfo: UserInfo) =>
        set({
          isLoggedIn: true,
          userInfo
        }),
      logout: () =>
        set({
          isLoggedIn: false,
          userInfo: { name: '', avatar: '' }
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