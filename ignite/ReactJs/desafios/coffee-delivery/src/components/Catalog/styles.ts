import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.GRAY[200]};
  width: 25.7rem;
  height: 31rem;
  border-radius: 6px 36px 6px 36px;
  padding: 0 2rem 2rem;
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

export const CoffeeInfo = styled.div`
  height: 3.6rem;
  margin-bottom: 7rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.GRAY[600]};
    text-align: center;
    margin: 0.8rem auto;
  }
`

export const TagsContent = styled.div`
  width: 100%;
  height: 2.1rem;
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 11.2rem auto 1.6rem;

  div + div {
    margin-left: 0.4rem;
  }
`

export const Tag = styled.div`
  background-color: ${(props) => props.theme.YELLOW[200]};
  color: ${(props) => props.theme.YELLOW[800]};
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  width: fit-content;
  height: 2.1rem;
  border-radius: 100px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.4rem;

  > p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    margin-right: 1.5rem;
    display: flex;
    align-items: end;
  }

  > p span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  > div {
    display: flex;
  }
`

export const CartButton = styled.button`
  background-color: ${(props) => props.theme.PURPLE[800]};
  color: ${(props) => props.theme.WHITE};
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
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
