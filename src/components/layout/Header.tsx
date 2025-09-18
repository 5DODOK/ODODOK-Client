"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import * as S from "./style";

export default function Header() {
  const router = useRouter();
  const { isLoggedIn, userInfo, login, logout } = useUserStore();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { label: "문제 등록", path: "/register" },
    { label: "문제 검색", path: "/search" },
    { label: "문제 풀기", path: "/solve" },
    { label: "랭크", path: "/rank" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && !isLoggedIn) {
      const defaultUserInfo = {
        name: "오주현",
        avatar: ""
      };
      login(defaultUserInfo);
    } else if (!token && isLoggedIn) {
      logout();
    }
  }, [isLoggedIn, login, logout]);

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
    logout();
    router.push("/");
  };

  const handleTestLogin = () => {
    const testUserInfo = {
      name: "오주현",
      avatar: "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png"
    };
    localStorage.setItem("accessToken", "test-token");
    login(testUserInfo);
  };

  const getUserInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowDropdown(false);
    };

    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showDropdown]);

  return (
    <S.Header>
      <S.Inner>
        <S.Logo onClick={() => handleNavigation("/")}>BUMAVIEW</S.Logo>
        <S.NavWrap>
          <S.Nav>
            {navItems.map((item) => {
              if (!isLoggedIn) return null;

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
          {isLoggedIn ? (
            <S.ProfileWrapper>
              <S.ProfileContainer
                onClick={handleProfileClick}
                style={{ position: 'relative' }}
              >
                {userInfo.avatar ? (
                  <S.Avatar src={userInfo.avatar} alt={userInfo.name} />
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
          ) : (
            <S.LoginButton onClick={handleTestLogin}>
              로그인 (테스트)
            </S.LoginButton>
          )}
        </S.NavWrap>
      </S.Inner>
    </S.Header>
  );
}
