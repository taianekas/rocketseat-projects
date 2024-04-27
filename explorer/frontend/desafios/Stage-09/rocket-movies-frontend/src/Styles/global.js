import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BG_ALL};
  font-size: 1.8rem;
  -webkit-font-smoothing: antialiased;
}

body, input, button, a, p, h1, h2, textarea, span {
  font-family: 'Roboto Slab', serif;
  outline: none;
} 

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  border: none;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

input {
  border: none;
  background: transparent;
}

`