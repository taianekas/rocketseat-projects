import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 144rem;
  height: 100vh;
  margin: 0 auto;
  padding: 3.2rem;
  background-color: ${(props) => props.theme.GRAY[100]};
  display: flex;
  flex-direction: column;
`
