import styled from '@emotion/styled';

export const PageWrapper = styled.main`
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
    background: radial-gradient(ellipse at top, rgba(102, 126, 234, 0.08) 0%, transparent 60%);
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

export const PageTitle = styled.h1`
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 48px;
  text-align: center;
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

export const RankingSection = styled.div``;

export const TopThree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const TopUserCard = styled.div<{ rank: number }>`
  background: linear-gradient(135deg, 
    ${props => {
    switch (props.rank) {
      case 1: return 'rgba(254, 243, 199, 0.9), rgba(245, 158, 11, 0.8)';
      case 2: return 'rgba(243, 244, 246, 0.9), rgba(156, 163, 175, 0.8)';
      case 3: return 'rgba(254, 242, 242, 0.9), rgba(248, 113, 113, 0.8)';
      default: return 'rgba(248, 250, 252, 0.9), rgba(100, 116, 139, 0.8)';
    }
  }}
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  box-shadow: 
    0 12px 40px rgba(102, 126, 234, 0.15),
    0 4px 12px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.9);
  transform: ${props => props.rank === 1 ? 'scale(1.05)' : 'scale(1)'};
  order: ${props => props.rank === 1 ? 0 : props.rank === 2 ? -1 : 1};
  transition: all 0.3s ease;

  &:hover {
    transform: ${props => props.rank === 1 ? 'scale(1.08)' : 'scale(1.03)'} translateY(-4px);
    box-shadow: 
      0 16px 50px rgba(102, 126, 234, 0.2),
      0 6px 16px rgba(0,0,0,0.12),
      inset 0 1px 0 rgba(255,255,255,1);
  }
  
  @media (max-width: 768px) {
    order: ${props => props.rank - 1};
    transform: scale(1);
  }
`;

export const RankIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const TopUserAvatar = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  &[as="div"] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const TopUserName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
`;

export const TopUserPoints = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.8rem;
`;

export const RankingList = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const RankingHeader = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 150px;
  background-color: #f8fafc;
  padding: 1rem;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  
  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr 100px;
    font-size: 0.9rem;
  }
`;

export const HeaderCell = styled.div``;

export const RankingRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 150px;
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8fafc;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr 100px;
  }
`;

export const RankCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RankNumber = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
`;

export const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #e5e7eb;
`;

export const UserName = styled.div`
  font-weight: 600;
  color: #1a1a1a;
`;

export const PointsCell = styled.div`
  font-weight: 700;
  color: #3b82f6;
  text-align: center;
  font-size: 1.1rem;
`;