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
  max-width: 800px;
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

export const TypeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 32px;
`;

export const TypeButton = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  background: ${props => props.active
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  color: ${props => props.active ? 'white' : '#374151'};
  border: ${props => props.active ? 'none' : '1px solid rgba(0, 0, 0, 0.06)'};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active
    ? '0 4px 16px rgba(102, 126, 234, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)'
    : '0 2px 8px rgba(0,0,0,0.06)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.active
    ? '0 6px 20px rgba(102, 126, 234, 0.5), 0 3px 6px rgba(0, 0, 0, 0.15)'
    : '0 4px 12px rgba(0,0,0,0.1)'};
  }

  &:active {
    transform: translateY(0);
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
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 
    0 8px 32px rgba(102, 126, 234, 0.08),
    0 2px 8px rgba(0,0,0,0.04),
    inset 0 1px 0 rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-size: 15px;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 32px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5), 0 3px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
  
  &:active {
    transform: translateY(0);
  }
`;