import styled from 'styled-components';

export const Container = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--fourthColor);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1.2s linear infinite;
  margin: 20px auto;
`;
