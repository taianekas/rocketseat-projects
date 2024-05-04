import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 5.4rem;
`

export const Intro = styled.header`
  display: flex;
  gap: 5.6rem;
  justify-content: space-between;
  margin-bottom: 6.6rem;

  div {
    width: 58.8rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 4.8rem;
    font-weight: 900;
    color: ${(props) => props.theme.GRAY[900]};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.GRAY[800]};
    font-size: 2rem;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 6.6rem;

    p {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      text-align: justify;
      margin-bottom: 2rem;
    }
  }

  .items p:nth-child(2) {
    margin-left: 6.5rem;
  }

  .items p:nth-child(4) {
    margin-left: 6.3rem;
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

export const Icon = styled.span<StatusProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.WHITE};
  background-color: ${(props) => BG_COLORS[props.statuscolor]};
`
