import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navbar = styled.nav`
  ul {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
  }

  ul li {
    list-style: none;
  }
`
export const Locale = styled.div`
  background-color: ${(props) => props.theme.PURPLE[200]};
  width: 14.3rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  padding: 1.1rem;
  border-radius: 6px;

  p {
    color: ${(props) => props.theme.PURPLE[800]};
    font-size: 1.4rem;
    line-height: 1.3;
    flex: 1;
    text-align: center;
  }
`
