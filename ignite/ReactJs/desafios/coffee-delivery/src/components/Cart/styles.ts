import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${(props) => props.theme.YELLOW[200]};
  border-radius: 6px;
  padding: 0.8rem;
  position: relative;
`

export const Count = styled.div`
  .count-visible {
    display: flex;
    background-color: ${(props) => props.theme.YELLOW[800]};
    color: ${(props) => props.theme.WHITE};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1.3;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -8px;
    left: 26px;
  }

  .count-hidden {
    display: none;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
`
