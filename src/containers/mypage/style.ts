import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px;
  background: #f8f8f8;
  min-height: calc(100vh - 100px);
`;

export const PageTitle = styled.h1`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: #111;
  margin: 0 0 40px;
  text-align: center;
`;

export const ProfileHeader = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f1f1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;
    padding: 24px;
  }
`;

export const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #f1f1f1;
  background: #f8f8f8;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const ProfileName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #111;
`;

export const ProfileLevel = styled.div`
  background-color: #f1f1f1;
  color: #666;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 8px;
`;

export const ProfileRank = styled.div`
  font-size: 16px;
  color: #666;
`;

export const ProfileScore = styled.div`
  text-align: center;
`;

export const ScoreValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4px;
  color: #111;
`;

export const ScoreLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

export const TabNavigation = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 12px;
  padding: 8px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f1f1f1;
`;

export const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px 16px;
  background-color: ${props => props.active ? '#111' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#666'};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#111' : '#f8f8f8'};
    color: ${props => props.active ? '#fff' : '#111'};
  }
`;

export const TabContent = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f1f1;
`;

export const ProfileSection = styled.div``;

export const ProfileView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProfileField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f1f1;
  
  &:last-of-type {
    border-bottom: none;
  }
`;

export const FieldLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #666;
`;

export const FieldValue = styled.div`
  font-size: 16px;
  color: #111;
  line-height: 1.5;
`;

export const FieldLink = styled.a`
  font-size: 16px;
  color: #111;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const EditButton = styled.button`
  align-self: flex-start;
  padding: 12px 24px;
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.04s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 1);
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 1);
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #111;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #111;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #111;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const SaveButton = styled.button`
  padding: 12px 24px;
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.04s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 1);
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 1);
  }
`;

export const CancelButton = styled.button`
  padding: 12px 24px;
  background-color: #fff;
  color: #111;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.04s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.12);
  }
`;

export const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

export const StatCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f1f1f1;
`;

export const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 8px;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const DifficultyStats = styled.div``;

export const StatsTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111;
  margin-bottom: 16px;
`;

export const DifficultyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DifficultyCard = styled.div`
  background-color: #fff;
  border: 2px solid #f1f1f1;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
`;

export const DifficultyLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #666;
`;

export const DifficultyCount = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #111;
`;

export const HistorySection = styled.div``;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HistoryItem = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
  background: #fff;
  
  &:hover {
    border-color: #e5e5e5;
  }
`;

export const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
`;

export const HistoryTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #111;
  margin: 0;
  flex: 1;
`;

export const HistoryDifficulty = styled.span`
  background-color: #f1f1f1;
  color: #666;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
`;

export const HistoryMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const HistoryDate = styled.div``;

export const HistoryScore = styled.div`
  font-weight: 600;
  color: #111;
`;