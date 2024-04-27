import styled from 'styled-components';


export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  padding: 0 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BG_BUTTON};
  color: ${({ theme }) => theme.COLORS.C_FONT_BUTTON};
  font-size: 1.6rem;

  &:disabled {
    opacity: 0.5;
  }
`;