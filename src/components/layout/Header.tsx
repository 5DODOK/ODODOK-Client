"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import * as S from "./style";
import { useAuth } from '@/hooks/useAuth';
import LoginButton from '@/components/auth/LoginButton';

export default function Header() {
  const router = useRouter();
  const { isLoggedIn, userInfo, login, logout } = useUserStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const { isAdmin } = useAuth();

  const navItems = [
    { label: "문제 등록", path: "/register" },
    { label: "문제 검색", path: "/search" },
    { label: "문제 풀기", path: "/solve" },
    { label: "랭크", path: "/rank" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userStr = localStorage.getItem("user");
    if (token && userStr && !isLoggedIn) {
      try {
        const user = JSON.parse(userStr);
        login({
          id: user.id,
          name: user.name,
          email: user.email,
          profileImageUrl: user.profileImageUrl || user.avatar || ""
        });
      } catch {
        // ignore
      }
    } else if ((!token || !userStr) && isLoggedIn) {
      logout();
    }
  }, [isLoggedIn, login, logout]);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(false);
    };

    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showDropdown]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMyPageClick = () => {
    setShowDropdown(false);
    router.push("/mypage");
  };

  const handleLogoutClick = () => {
    setShowDropdown(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    logout();
    router.push("/");
  };

  const getUserInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  // 조건부 렌더링은 return에서만 처리
  if (!isLoggedIn) {
    return (
      <S.Header>
        <S.Inner>
          <S.Logo onClick={() => handleNavigation("/")}>BUMAVIEW</S.Logo>
          <S.NavWrap>
            <LoginButton />
          </S.NavWrap>
        </S.Inner>
      </S.Header>
    );
  }

  return (
    <S.Header>
      <S.Inner>
        <S.Logo onClick={() => handleNavigation("/")}>BUMAVIEW</S.Logo>
        <S.NavWrap>
          <S.Nav>
            {navItems.map((item) => {
              // 관리자만 "문제 등록" 노출 예시
              if (item.path === "/register" && !isAdmin(userInfo)) return null;
              return (
                <S.NavItem
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </S.NavItem>
              );
            })}
          </S.Nav>
          <S.ProfileWrapper>
            <S.ProfileContainer
              onClick={handleProfileClick}
              style={{ position: 'relative' }}
            >
              {userInfo.profileImageUrl ? (
                <S.Avatar src={userInfo.profileImageUrl} alt={userInfo.name} />
              ) : (
                <S.AvatarInitials>
                  {getUserInitials(userInfo.name)}
                </S.AvatarInitials>
              )}
              <S.UserName>{userInfo.name}</S.UserName>
            </S.ProfileContainer>
            {showDropdown && (
              <S.DropdownMenu>
                <S.DropdownItem onClick={handleMyPageClick}>
                  마이페이지
                </S.DropdownItem>
                <S.DropdownItem onClick={handleLogoutClick}>
                  로그아웃
                </S.DropdownItem>
              </S.DropdownMenu>
            )}
          </S.ProfileWrapper>
        </S.NavWrap>
      </S.Inner>
    </S.Header>
  );
}
