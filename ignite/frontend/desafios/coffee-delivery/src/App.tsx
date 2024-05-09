import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './pages/Router'
import { CartContextProvider } from './contexts/ShoppingCartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
