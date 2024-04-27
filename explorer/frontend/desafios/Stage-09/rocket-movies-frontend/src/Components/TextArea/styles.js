import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.C_FONT_1};

  border: none;
  resize: none;
  border-radius: 1rem;
  padding: 1.6rem;
  margin-bottom: 4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.C_FONT_INPUT};
  }
`;