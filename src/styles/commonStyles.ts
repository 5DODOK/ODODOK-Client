import styled from "@emotion/styled";
import { css } from "@emotion/react";

// 공통 CSS 스니펫들
export const glassmorphism = css`
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 8px 32px rgba(102, 126, 234, 0.08),
    0 2px 8px rgba(0,0,0,0.04),
    inset 0 1px 0 rgba(255,255,255,0.8);
`;

export const cardHover = css`
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 12px 40px rgba(102, 126, 234, 0.12),
      0 4px 12px rgba(0,0,0,0.08),
      inset 0 1px 0 rgba(255,255,255,0.9);
  }
`;

export const gradientText = css`
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const accentUnderline = css`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

// 공통 컴포넌트들
export const PageContainer = styled.main<{ variant?: 'default' | 'gradient' }>`
  background: ${props => props.variant === 'gradient'
    ? 'linear-gradient(180deg, #fafbfd 0%, #f0f2f8 50%, #e8eaf5 100%)'
    : '#f8f9fa'};
  min-height: calc(100dvh - 100px);
  position: relative;
  overflow: hidden;

  ${props => props.variant === 'gradient' && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 600px;
      background: radial-gradient(ellipse at top, rgba(102, 126, 234, 0.08) 0%, transparent 60%);
      pointer-events: none;
    }
  `}
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px;
  position: relative;
  z-index: 1;
`;

export const Card = styled.div<{ hover?: boolean }>`
  ${glassmorphism}
  border-radius: 16px;
  padding: 24px;
  ${props => props.hover && cardHover}
`;

export const SectionTitle = styled.h2<{ centered?: boolean; underline?: boolean }>`
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  margin-bottom: 16px;
  ${gradientText}
  ${props => props.centered && css`text-align: center;`}
  ${props => props.underline && accentUnderline}
  ${props => props.underline && props.centered && css`
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || '20px'};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  ${props => props.variant === 'primary' ? css`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5), 0 3px 6px rgba(0, 0, 0, 0.15);
    }
  ` : css`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    color: #111;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);

    &:hover {
      background: rgba(255, 255, 255, 1);
      border-color: rgba(102, 126, 234, 0.2);
      transform: translateY(-2px);
    }
  `}

  &:active {
    transform: translateY(0);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 10px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 10px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const Badge = styled.span<{ color?: 'primary' | 'success' | 'warning' | 'danger' }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  
  ${props => {
    switch (props.color) {
      case 'success':
        return css`
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
        `;
      case 'warning':
        return css`
          background: rgba(251, 146, 60, 0.1);
          color: #ea580c;
        `;
      case 'danger':
        return css`
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        `;
      default:
        return css`
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        `;
    }
  }}
`;
