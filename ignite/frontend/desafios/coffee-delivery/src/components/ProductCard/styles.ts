import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.GRAY[400]};
  padding: 0 0 2.4rem;
  margin: 0 0 2.4rem;
  gap: 2rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
  }

  > p {
    flex: 1;
    text-align: end;
    font-weight: 800;
    margin-bottom: 4rem;
  }
`

export const Actions = styled.div`
  display: flex;
  margin-top: 0.8rem;
`
export const RemoveItemButton = styled.button`
  background-color: ${(props) => props.theme.GRAY[400]};
  color: ${(props) => props.theme.GRAY[700]};
  border: none;
  border-radius: 6px;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: 0.3s background-color;
  margin-left: 0.8rem;

  svg path {
    color: ${(props) => props.theme.PURPLE[400]};
  }

  &:hover {
    background-color: ${(props) => props.theme.GRAY[500]};

    svg path {
      color: ${(props) => props.theme.PURPLE[800]};
    }
  }
`
