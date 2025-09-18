import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ProfileHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  color: white;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
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
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

export const ProfileLevel = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const ProfileRank = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

export const ProfileScore = styled.div`
  text-align: center;
`;

export const ScoreValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ScoreLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

export const TabNavigation = styled.div`
  display: flex;
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 2rem;
`;

export const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.75rem;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#374151' : '#6b7280'};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  
  &:hover {
    background-color: ${props => props.active ? 'white' : '#f1f5f9'};
  }
`;

export const TabContent = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
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
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-of-type {
    border-bottom: none;
  }
`;

export const FieldLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #6b7280;
`;

export const FieldValue = styled.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.5;
`;

export const FieldLink = styled.a`
  font-size: 1rem;
  color: #3b82f6;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const EditButton = styled.button`
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SaveButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #059669;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }
`;

export const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #6b7280;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #4b5563;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(107, 114, 128, 0.4);
  }
`;

export const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 500;
`;

export const DifficultyStats = styled.div``;

export const StatsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
`;

export const DifficultyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DifficultyCard = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  color: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
`;

export const DifficultyLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

export const DifficultyCount = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const HistorySection = styled.div``;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HistoryItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  gap: 1rem;
`;

export const HistoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  flex: 1;
`;

export const HistoryDifficulty = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
`;

export const HistoryMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #6b7280;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const HistoryDate = styled.div``;

export const HistoryScore = styled.div`
  font-weight: 600;
  color: #10b981;
`;