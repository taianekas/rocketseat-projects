import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.BG_BUTTON};
`;