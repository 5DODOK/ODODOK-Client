"use client";
import styled from "@emotion/styled";
import Link from "next/link";

export const Page = styled.main`
  background: linear-gradient(180deg, #fafbfd 0%, #f0f2f8 50%, #e8eaf5 100%);
  min-height: calc(100dvh - 100px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 600px;
    background: radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 60%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(118, 75, 162, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px;
  position: relative;
  z-index: 1;
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.15;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 28px;
  margin-top: 20px;
  font-size: clamp(16px, 2vw, 20px);
  color: #555;
  line-height: 1.6;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform .04s ease, box-shadow .2s ease;
  will-change: transform;
`;

export const PrimaryButton = styled(Link)`
  ${buttonBase};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4), 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const SecondaryButton = styled(Link)`
  ${buttonBase};
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(102, 126, 234, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  }
`;

export const Art = styled.div`
  display: grid;
  place-items: center;
  padding: 24px;
`;

export const ArtCard = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
  backdrop-filter: blur(20px);
  width: 100%;
  max-width: 520px;
  aspect-ratio: 4 / 3;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 8px 24px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.8);
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-20px, 20px) rotate(180deg); }
  }
`;

export const Features = styled.section`
  margin-top: 72px;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 24px;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  align-items: center;
  box-shadow: 
    0 8px 32px rgba(102, 126, 234, 0.08),
    0 2px 8px rgba(0,0,0,0.04),
    inset 0 1px 0 rgba(255,255,255,0.8);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const FeatureTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  color: #111;
`;

export const FeatureDesc = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

// 추가 섹션 스타일
export const ShowcaseSection = styled.section`
  margin-top: 120px;
  padding: 80px 0;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  text-align: center;
  color: #666;
  margin-bottom: 60px;
  margin-top: 24px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowcaseCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 32px;
  padding: 60px 40px;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.3),
    0 8px 24px rgba(0,0,0,0.1),
    inset 0 1px 0 rgba(255,255,255,0.2);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%);
    pointer-events: none;
  }
`;

export const ShowcaseTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ShowcaseDesc = styled.p`
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
`;

export const StatsSection = styled.section`
  margin-top: 120px;
  padding: 80px 60px;
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 32px;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.12),
    0 8px 24px rgba(0,0,0,0.06),
    inset 0 1px 0 rgba(255,255,255,0.8);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 20px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background: linear-gradient(180deg, transparent, rgba(102, 126, 234, 0.2), transparent);

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const StatNumber = styled.div`
  font-size: 56px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
`;

export const StatLabel = styled.div`
  font-size: 18px;
  color: #666;
  font-weight: 500;
`;

export const CTASection = styled.section`
  margin-top: 120px;
  padding: 100px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 32px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.4),
    0 8px 24px rgba(0,0,0,0.1);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%);
    animation: rotateBg 30s linear infinite;
  }

  @keyframes rotateBg {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%);
    pointer-events: none;
  }
`;

export const CTATitle = styled.h2`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
`;

export const CTADesc = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  margin-bottom: 40px;
  opacity: 0.95;
  position: relative;
  z-index: 1;
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 40px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  background: white;
  color: #667eea;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  box-shadow: 
    0 8px 24px rgba(0,0,0,0.2),
    0 2px 8px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 12px 32px rgba(0,0,0,0.25),
      0 4px 12px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`;
