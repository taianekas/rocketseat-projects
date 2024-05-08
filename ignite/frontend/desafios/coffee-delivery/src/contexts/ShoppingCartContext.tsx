import { ReactNode, createContext } from 'react'

export interface ProductData {
  id: string
  tag: string[]
  name: string
  description: string
  price: number
  image: string
  count: number
}

export interface TypesDataProduct {
  dataBase: ProductData[]
}

interface ShoppingCartContextTypes {}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextTypes)
export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
