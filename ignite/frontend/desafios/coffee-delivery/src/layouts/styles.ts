import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 115rem;
  height: 100vh;
  margin: 0 auto;
  padding-top: 3.2rem;
  background-color: ${(props) => props.theme.GRAY[100]};
  display: flex;
  flex-direction: column;
`
