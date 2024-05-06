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

  ::-webkit-scrollbar-thumb {
    background: transparent; /* Cor do thumb (alça) do scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: transparent; /* Cor do fundo do scrollbar */
  }
  ::-webkit-scrollbar {
    width: 0px; /* Largura do scrollbar */
    display: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  body, input, button {
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.GRAY[100]};
    color: ${(props) => props.theme.GRAY[700]};
    font-size: 1.6rem;
    line-height: 1.3;
  }
  
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`
