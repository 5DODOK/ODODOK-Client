"use client";
import styled from "@emotion/styled";

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding: 1.1rem 0;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Inner = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-family: "Paperlogy";
  font-weight: 700;
  font-size: 44px;
  color: #000;
  line-height: 1;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #454545;
  font-size: 28px;
  font-weight: 600;
  white-space: nowrap;
`;

export const NavItem = styled.div`
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #10b981;
  }
`;

export const LoginButton = styled.button`
  background-color: #10b981;
  color: #fff;
  border-radius: 2px;
  padding: 15px 37px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  font-family: "Paperlogy";

  &:active {
    transform: translateY(1px);
  }
`;
