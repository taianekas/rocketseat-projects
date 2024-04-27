import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BG_INPUT};
  color: ${({ theme }) => theme.COLORS.C_FONT_1};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.BG_BORDER}` : `${theme.COLORS.BG_BORDER}`};
  border-radius: 1rem;
  

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.C_FONT_3};
    font-size: 2rem;
    margin-right: 1.6rem;
  }

  input {
    height: 5.6rem;
    width: fit-content;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.C_FONT_INPUT};
    }
  }

`;