import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }
  
  :focus {
    outline: 0;
    border: 1px solid ${(props) => props.theme.blue};
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
  
  body {
    background-color: ${(props) => props.theme['base-background']};
  }
  
  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`
