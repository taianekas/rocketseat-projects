import { createGlobalStyle } from 'styled-components';

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
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-border']};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
  }
  
  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;