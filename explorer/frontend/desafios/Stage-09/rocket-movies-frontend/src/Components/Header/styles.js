import styled from 'styled-components';


export const Container = styled.header`
grid-area: header;
width: 100%;
height: 10.5rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 4.2rem 12.3rem;
margin: 0 auto;
gap: 6.4rem;

border-bottom-width: .1rem;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BG_MARGIN};

> h1 {
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.C_FONT_3};
}`

export const Profile = styled.div`
  display: flex;
  align-items: center;

> div {
  display: flex;
  flex-direction: column;
  align-items: end;

  a {
  color: ${({ theme }) => theme.COLORS.C_FONT_1};
  font-weight: bold;
  white-space: nowrap;
  }

  button {
    color: ${({ theme }) => theme.COLORS.C_FONT_LINK_2};
    border: none;
    background: transparent;
  }

}

> img {
  margin-left: 1rem;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
}

`;