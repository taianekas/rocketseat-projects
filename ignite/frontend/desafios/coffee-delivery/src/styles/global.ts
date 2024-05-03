import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme.YELLOW[400]};
  }

  body {
    background-color: ${(props) => props.theme.GRAY[100]};
    color: ${(props) => props.theme.GRAY[700]};
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }
`
