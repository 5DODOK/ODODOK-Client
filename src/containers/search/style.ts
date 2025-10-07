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

export const SearchSection = styled.div`
  background-color: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterGroup = styled.div`
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
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SearchButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ResetButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #6b7280;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #4b5563;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(107, 114, 128, 0.4);
  }
`;

export const ResultSection = styled.div``;

export const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ResultCount = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
`;

export const ProblemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProblemCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const ProblemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const ProblemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  flex: 1;
`;

export const Difficulty = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
`;

export const ProblemMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MetaItem = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const ProblemActions = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.primary ? '#10b981' : '#f3f4f6'};
  color: ${props => props.primary ? 'white' : '#374151'};
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#059669' : '#e5e7eb'};
    transform: translateY(-1px);
  }
`;

export const ErrorMessage = styled.div`
  padding: 1.5rem;
  background-color: #fee2e2;
  color: #991b1b;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem 0;
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #059669;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.div`
  font-size: 0.9rem;
  color: #374151;
  font-weight: 500;
`;