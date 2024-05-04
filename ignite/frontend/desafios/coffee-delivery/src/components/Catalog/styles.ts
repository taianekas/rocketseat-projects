import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.GRAY[300]};
  width: 25.6rem;
  height: 31rem;
  border-radius: 6px 36px 6px 36px;
  padding: 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .img-container {
    width: 12rem;
    height: 12rem;
    position: absolute;
    top: -20px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export const Tag = styled.h4`
  background-color: ${(props) => props.theme.YELLOW[200]};
  color: ${(props) => props.theme.YELLOW[800]};
  width: 8.1rem;
  height: 2.1rem;
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 11.2rem auto 1.6rem;
  text-transform: uppercase;
`

export const CoffeeInfo = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.GRAY[600]};
    text-align: center;
    margin: 0.8rem auto 2rem;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    margin-right: 2.3rem;
  }

  > p span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
  }
`

export const CartButton = styled.button`
  background-color: ${(props) => props.theme.PURPLE[800]};
  color: ${(props) => props.theme.WHITE};
  border: none;
  border-radius: 6px;
  padding: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s background-color;
  margin-left: 0.8rem;

  &:hover {
    background-color: ${(props) => props.theme.PURPLE[400]};
  }
`
