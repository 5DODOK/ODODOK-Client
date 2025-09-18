import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 3rem;
  text-align: center;
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
      case 1: return '#fef3c7, #f59e0b';
      case 2: return '#f3f4f6, #9ca3af';
      case 3: return '#fef2f2, #f87171';
      default: return '#f8fafc, #64748b';
    }
  }}
  );
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: ${props => props.rank === 1 ? 'scale(1.05)' : 'scale(1)'};
  order: ${props => props.rank === 1 ? 0 : props.rank === 2 ? -1 : 1};
  
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