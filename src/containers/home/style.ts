"use client";
import styled from "@emotion/styled";
import Link from "next/link";

export const Page = styled.main`
  background: #f8f8f8;
  min-height: calc(100dvh - 100px); /* 헤더 높이 제외 */
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px;
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
  color: #111;
`;

export const Subtitle = styled.p`
  margin: 0 0 28px;
  font-size: clamp(16px, 2vw, 20px);
  color: #444;
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
  background: #111;
  color: #fff;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 1);

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 1);
  }
`;

export const SecondaryButton = styled(Link)`
  ${buttonBase};
  background: #fff;
  color: #111;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 0 rgba(0,0,0,0.1);

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0,0,0,0.12);
  }
`;

export const Art = styled.div`
  display: grid;
  place-items: center;
  padding: 24px;
`;

export const ArtCard = styled.div`
  background: #fff;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  display: grid;
  place-items: center;
  overflow: hidden;
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
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  align-items: center;
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
