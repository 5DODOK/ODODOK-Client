"use client";
import styled from "@emotion/styled";

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding: 0.8rem 0;
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
  font-size: 40px;
  color: #000;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #10b981;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  color: #454545;
  font-size: 24px;
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
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  font-family: "Paperlogy";

  &:active {
    transform: translateY(1px);
  }
`;

export const ProfileContainer = styled.div`
  background-color: #10b981;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 6px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
  
  &:hover {
    background-color: #0fae79ff;
  }
  
  &:active {
    transform: translateY(0px);
    box-shadow: 0 1px 2px rgba(16, 185, 129, 0.2);
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #e5e7eb;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AvatarInitials = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #6366f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: "Paperlogy";
`;

export const UserName = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-family: "Paperlogy";
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  min-width: 160px;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  color: #374151;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &:last-child {
    color: #ef4444;
  }
`;
