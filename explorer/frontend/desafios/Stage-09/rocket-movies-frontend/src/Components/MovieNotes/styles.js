import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BG_MOVIENOTE};

  padding: 3.2rem;
  border-radius: 1.6rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: .0rem 0.2rem 0.2rem ${({ theme }) => theme.COLORS.C_HOVER};
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
    font-size: 2.4rem;
    text-align: left;
  }

  > div {
    margin-top: 0.8rem;
    display: flex;
    gap: 0.6rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.C_FONT_5};
    text-align: justify;
    text-overflow: ellipsis;
    margin-top: 1.6rem;
  }

  > footer {
    display: flex;
    gap: 0.8rem;
    margin-top: 3.5rem;
  }
`;