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
  margin-bottom: 2rem;
  text-align: center;
`;

export const ModeSelection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ModeCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

export const ModeIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const ModeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ModeDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.9;
`;

export const SelectionSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #374151;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 2rem;
  text-align: center;
`;

export const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const CompanyCard = styled.div`
  background-color: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

export const CompanyInfo = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.div`
  background-color: white;
  border: 2px solid #e5e7eb;
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const CategoryDescription = styled.p`
  color: #6b7280;
  line-height: 1.5;
`;

export const SolvingSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const SolvingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SolvingInfo = styled.div`
  text-align: center;
`;

export const SolvingTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

export const ProgressInfo = styled.div`
  color: #6b7280;
  font-size: 1rem;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${props => props.width}%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  transition: width 0.3s ease;
`;

export const ProblemSection = styled.div``;

export const ProblemCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
`;

export const ProblemHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProblemTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

export const ProblemMeta = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
`;

export const ProblemContent = styled.div`
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 2rem;
  white-space: pre-wrap;
`;

export const AnswerSection = styled.div`
  margin-bottom: 2rem;
`;

export const AnswerLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const AnswerTextarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.2s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const NavButton = styled.button<{ primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? '#3b82f6' : '#f3f4f6'};
  color: ${props => props.primary ? 'white' : '#374151'};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${props => props.primary ? '#2563eb' : '#e5e7eb'};
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #059669;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }
`;

export const CompletionSection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

export const CompletionIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

export const CompletionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const CompletionMessage = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

export const RestartButton = styled.button`
  padding: 1rem 2rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: #6b7280;
`;

export const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const EmptyStateText = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

// 추가 스타일 컴포넌트
export const SelectGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const SelectLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:hover {
    border-color: #d1d5db;
  }
`;

export const FeedbackSection = styled.div`
  background-color: #f0f9ff;
  border-left: 4px solid #3b82f6;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
`;

export const FeedbackTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;
`;

export const FeedbackText = styled.p`
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1rem;
  
  strong {
    color: #1e40af;
  }
`;

export const ResultStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatItem = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
`;
