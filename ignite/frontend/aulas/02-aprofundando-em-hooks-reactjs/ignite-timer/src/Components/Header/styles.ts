import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span img {
    width: 4rem;
    height: 4rem;
  }

  nav {
    display: flex;
    gap: 0.8rem;

    a {
      width: 4.8rem;
      height: 4.8rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: 0.2s border-bottom;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
