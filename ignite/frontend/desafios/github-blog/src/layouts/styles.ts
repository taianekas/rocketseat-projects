import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme['base-background']};
  display: flex;
  flex-direction: column;
`
