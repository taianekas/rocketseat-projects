import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
display: flex;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
color: ${({ theme }) => theme.COLORS.C_FONT_INPUT};


border-radius: 1rem;
margin-bottom: .8rem;


> input {
  height: 5.5rem;
  width: 100%;
  padding-left: 2.4rem;
  padding-top: 1.9rem;
  padding-bottom: 1.9rem;
  margin-bottom: .8rem;
  color: ${({ theme }) => theme.COLORS.C_FONT_1};
  font-size: 1.4rem;
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.C_FONT_INPUT};
  }
}

svg {
  margin-left: 1.6rem;
}

`;