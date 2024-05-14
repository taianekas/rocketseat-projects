import styled from 'styled-components'

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.GRAY[400]};
  color: ${(props) => props.theme.GRAY[700]};
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.GRAY[500]};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme.PURPLE[200]};
    border-color: ${(props) => props.theme.PURPLE[400]};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.PURPLE[800]};
  }
`
