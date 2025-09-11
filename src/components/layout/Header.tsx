"use client";
import * as S from "./style";

export default function Header() {
  return (
    <S.Header>
      <S.Inner>
        <S.Logo>BUMAVIEW</S.Logo>
        <S.NavWrap>
          <S.Nav>
            <S.NavItem>문제 등록</S.NavItem>
            <S.NavItem>문제 검색</S.NavItem>
            <S.NavItem>문제 풀기</S.NavItem>
            <S.NavItem>랭크</S.NavItem>
            <S.NavItem>마이페이지</S.NavItem>
          </S.Nav>
          <S.LoginButton>로그인</S.LoginButton>
        </S.NavWrap>
      </S.Inner>
    </S.Header>
  );
}
