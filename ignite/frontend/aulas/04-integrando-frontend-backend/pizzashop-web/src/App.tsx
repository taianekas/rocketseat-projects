import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
        <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
          <Helmet titleTemplate="%s | pizza.shop" />

          <Toaster richColors />

          <RouterProvider router={router} />
        </ThemeProvider>
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  )
}
