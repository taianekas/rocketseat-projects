import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 4rem 1.6rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2.5rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 6.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
