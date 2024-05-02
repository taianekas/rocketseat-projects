import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 108.4rem;
  height: calc(100vh - 16rem);
  margin: 8rem auto;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
