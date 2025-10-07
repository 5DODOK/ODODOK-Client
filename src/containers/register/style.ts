import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
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

export const TypeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const TypeButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? '#3b82f6' : '#f3f4f6'};
  color: ${props => props.active ? 'white' : '#374151'};
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#2563eb' : '#e5e7eb'};
    transform: translateY(-1px);
  }
`;

export const CsvSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const IndividualSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FileInput = styled.input`
  padding: 0.75rem;
  border: 2px dashed #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  background-color: #f8fafc;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const FileHelperText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
  line-height: 1.4;
`;

export const SelectedFile = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: #dcfce7;
  border: 1px solid #16a34a;
  border-radius: 6px;
  color: #166534;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
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

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
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

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: #059669;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;