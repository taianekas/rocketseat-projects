import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 10.5rem auto;
grid-template-areas:
'header'
'content';

> main {
  display: grid;
  grid-area: content;
  overflow-y: scroll;
  
}

.tags {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: black;
  margin-bottom: 4rem;
  border-radius: 1rem;
  padding: 1rem;
}

`;

export const Form = styled.form`
  width: 118rem;
  margin: 4rem auto;
  overflow-y: scroll;


  > header {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 2.4rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.C_FONT_LINK_1};
    display: flex;
    align-items: center;
    gap: .8rem
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
    font-size: 3.6rem;
    line-height: 4.7rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  > .Inputs {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      width: 60rem;
    }
  }

  &::-webkit-scrollbar {
    width: 0.8rem;
    padding: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.C_FONT_3};
    border-radius: 8rem;
  }
`