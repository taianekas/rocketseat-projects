import styled from 'styled-components'

export const Container = styled.section`
  width: 86.4rem;
  height: 21.2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;

  display: flex;
  align-items: center;
  gap: 3.2rem;
  padding: 4rem;
`

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 2rem 0 0.8rem 0;
    color: ${(props) => props.theme['base-title']};
    font-size: 2.4rem;
    font-weight: 800;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 1.2rem;
    font-weight: 800;
    display: flex;
    gap: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  color: ${(props) => props.theme['base-span']};

  p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`
