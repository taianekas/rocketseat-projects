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
`;

export const Content = styled.div`
  width: 118rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > section {
    padding-top: 4rem;
  }

  h1 {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
  }

  div {
    display: flex;
    gap: 1rem;
  }

  .tags {
    margin-top: 4rem;
  }

`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
`

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.COLORS.C_FONT_1};

  img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.C_FONT_3};
  }
`

export const Description = styled.p`
  margin-top: 4rem;
  line-height: 2.1rem;
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.C_FONT_1};
  margin-bottom: 5rem;
`

export const Button = styled.button`
  width: 25rem;
  height: 3.6rem;
  border-radius: 1rem;
  padding: 0 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BG_BUTTON};
  color: ${({ theme }) => theme.COLORS.C_FONT_BUTTON};
  font-size: 1.6rem;
  margin: 2rem;

  &:disabled {
    opacity: 0.5;
  }
`