import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BG_MARK};
  border-radius: 0.8rem;
  width: fit-content;
  padding: 0.5rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1.2rem;
`;