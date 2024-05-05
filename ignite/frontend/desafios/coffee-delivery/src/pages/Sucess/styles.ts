import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  .text-container {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 4.8rem;
      font-weight: 900;
      color: ${(props) => props.theme.YELLOW[800]};
      margin-bottom: 1rem;
    }

    p {
      color: ${(props) => props.theme.GRAY[800]};
      font-size: 2rem;
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: fit-content;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) => theme.gradient};
`

export const OrderInfo = styled.div`
  width: 52.6rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.GRAY[100]};

  div {
    gap: 1.2rem;
    display: flex;

    p {
      font-size: 1.6rem;
      flex-wrap: wrap;
      margin-bottom: 3.2rem;
    }

    p span {
      font-weight: 800;
    }
  }

  .delivery {
    width: 35.4rem;
  }

  .timer {
    width: 15.5rem;
  }

  .pay {
    width: 20.6rem;
  }
`

const BG_COLORS = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  gray: '#574F4D',
  purple: '#8047F8',
} as const

interface StatusProps {
  statuscolor: keyof typeof BG_COLORS
}

export const Icon = styled.div<StatusProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.WHITE};
  background-color: ${(props) => BG_COLORS[props.statuscolor]};
`
