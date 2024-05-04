import styled from 'styled-components'

export const Container = styled.div`
  width: 7.2rem;
  height: 3.2rem;
  background-color: ${(props) => props.theme.GRAY[300]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0.8rem;
  flex: 1;

  p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.PURPLE[900]};
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
  }
`
export const Button = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  color: ${(props) => props.theme.PURPLE[400]};
  display: flex;
  justify-content: center;
  transition: 0.2s color;

  &:hover {
    color: ${(props) => props.theme.PURPLE[800]};
  }
`
