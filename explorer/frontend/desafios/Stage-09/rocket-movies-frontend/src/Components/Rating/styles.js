import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ isBigSize }) => (isBigSize ? "center" : "start")};
  gap: 1rem;

  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? "2rem" : "1.6rem")};
    color: ${({ theme }) => theme.COLORS.C_FONT_3};
  }
`;