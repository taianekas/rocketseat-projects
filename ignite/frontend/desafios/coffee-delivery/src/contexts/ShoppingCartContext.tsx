import { ReactNode, createContext, useState } from 'react'

// ➜ Sempre que precisar representar um único produto em seu aplicativo.
// Por exemplo, ao trabalhar com dados de um produto em um componente de exibição
// de detalhes do produto ou ao manipular dados de um produto em um contexto ou estado.
export interface ProductData {
  id: string
  tag: string[]
  name: string
  description: string
  price: number
  image: string
  count: number
}

// ➜ Quando precisar representar uma estrutura de dados que contenha uma lista de produtos.
// Por exemplo, ao trabalhar com uma lista de produtos no contexto de um carrinho de
// compras ou ao passar dados de produtos para um componente que espera uma lista de
// produtos.
export interface TypesDataProduct {
  dataBase: ProductData[]
}

type ProductId = string
type ProductCount = number
type ProductCounts = Record<ProductId, ProductCount>

interface ShoppingCartContextTypes {
  productCounts: ProductCounts
  decrementCount: (value: ProductId) => void
  incrementCount: (value: ProductId) => void
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextTypes)
export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [productCounts, setProductCounts] = useState<ProductCounts>({})

  function decrementCount(id: ProductId) {
    setProductCounts((prevProductsCount) => ({
      ...prevProductsCount,
      [id]: (prevProductsCount[id] ?? 0) !== 0 ? prevProductsCount[id] - 1 : 1,
    }))
  }

  function incrementCount(id: ProductId) {
    setProductCounts((prevProductsCount) => ({
      ...prevProductsCount,
      [id]: (prevProductsCount[id] ?? 1) + 1,
    }))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        productCounts,
        decrementCount,
        incrementCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
