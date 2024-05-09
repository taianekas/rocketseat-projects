import styled from 'styled-components'

const BaseButton = styled.button`
  transition: 0.3s background-color;
  background-color: transparent;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`

export const Container = styled.div`
  width: 100%;
`

export const AddToCart = styled.div`
  width: 20.8rem;
  height: 3.8rem;
  display: grid;
  grid-template-columns: 1fr 7.2rem 3.8rem;
  gap: 0.8rem;
  align-items: center;

  p {
    font-size: 1.2rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
  }
`
export const ButtonAddItem = styled(BaseButton)`
  background-color: ${(props) => props.theme.PURPLE[800]};
  color: ${(props) => props.theme.WHITE};
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.PURPLE[400]};
  }
`

export const RemoveFromCart = styled.div`
  color: ${(props) => props.theme.GRAY[800]};
  height: 8rem;
  width: 36.8rem;
  display: grid;
  grid-template-columns: 6.4rem 17.1rem 1fr;
  padding: 0.8rem 0.4rem;
  gap: 2rem;
  color: ${(props) => props.theme.GRAY[800]};

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3.2rem;
  gap: 0.8rem;

  p {
    grid-area: 1/1; /* row 1 - column 1 */
  }

  div {
    grid-area: 2/1; /* row 2 - column 1 */
  }

  button {
    grid-area: 2/2; /* row 2 - column 2 */
  }
`

export const ButtonRemoveItem = styled(BaseButton)`
  background-color: ${(props) => props.theme.GRAY[400]};
  color: ${(props) => props.theme.GRAY[700]};
  font-size: 1.2rem;
  gap: 0.4rem;
  padding: 0.8rem;

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

export const Counter = styled.div`
  background-color: ${(props) => props.theme.GRAY[400]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0.8rem;

  input {
    background-color: transparent;
    flex: 1;
    width: 100%;
    border: none;
    font-size: 1.6rem;
    color: ${(props) => props.theme.PURPLE[900]};
    text-align: center;
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
