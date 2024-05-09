import { ReactNode, createContext } from 'react'

export interface ProductData {
  id: string
  tag: string[]
  name: string
  description: string
  price: number
  image: string
}

interface CartContextTypes {}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
