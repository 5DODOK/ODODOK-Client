import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #0070f3;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 24px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const QuestionSection = styled.section`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const QuestionHeader = styled.div`
  margin-bottom: 32px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 24px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

export const QuestionTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin: 0;
  flex: 1;
`;

export const Difficulty = styled.span<{ color: string }>`
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: ${props => props.color};
  white-space: nowrap;
`;

export const MetaSection = styled.div`
  margin-bottom: 32px;
`;

export const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MetaLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
`;

export const MetaValue = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #111;
`;

export const AnswerSection = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 2px solid #f0f0f0;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin: 0 0 16px 0;
`;

export const InfoBox = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0;
`;
