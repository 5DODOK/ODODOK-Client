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
  margin-bottom: 40px;
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

export const SearchSection = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 
    0 8px 32px rgba(102, 126, 234, 0.08),
    0 2px 8px rgba(0,0,0,0.04),
    inset 0 1px 0 rgba(255,255,255,0.8);
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
  width: 100%;
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

export const Select = styled.select`
  width: 100%;
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

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SearchButton = styled.button`
  padding: 12px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5), 0 3px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ResetButton = styled.button`
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
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
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 32px rgba(102, 126, 234, 0.08),
    0 2px 8px rgba(0,0,0,0.04),
    inset 0 1px 0 rgba(255,255,255,0.8);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 12px 40px rgba(102, 126, 234, 0.12),
      0 4px 12px rgba(0,0,0,0.08),
      inset 0 1px 0 rgba(255,255,255,0.9);
  }

  &:hover::before {
    opacity: 1;
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
  padding: 8px 16px;
  background: ${props => props.primary
    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.primary ? 'white' : '#374151'};
  border: ${props => props.primary ? 'none' : '1px solid rgba(0, 0, 0, 0.06)'};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.primary
    ? '0 4px 12px rgba(16, 185, 129, 0.3)'
    : '0 2px 8px rgba(0,0,0,0.06)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary
    ? '0 6px 16px rgba(16, 185, 129, 0.4)'
    : '0 4px 12px rgba(0,0,0,0.1)'};
  }

  &:active {
    transform: translateY(0);
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

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 8px 24px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.9);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 1;
  transition: all 0.2s ease;
  border-radius: 6px;
  
  &:hover {
    color: #374151;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const ModalBody = styled.div`
  padding: 32px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  font-size: 15px;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 24px 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

export const ModalButton = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;