import { ReactNode, createContext, useEffect, useState } from 'react'
import { ProductsList } from '../data'

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
export interface TypesDataProduct {}

type ProductId = string
type ProductCount = number
type ProductCounts = Record<ProductId, ProductCount>

interface CartTypes {
  id: ProductId
  count: ProductCount
}

interface ShoppingCartContextTypes {
  countCart: number
  cartProducts: CartTypes[]
  productCounts: ProductCounts
  productsDataBase: ProductData[]
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
  const [countCart, setCountCart] = useState<number>(0)

  const productsDataBase: ProductData[] = ProductsList.map((data) => ({
    id: data.id,
    tag: data.tag.map((item) => item.title),
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image,
    count: data.count,
  }))

  function decrementCount(id: ProductId) {
    console.log(typeof productCounts)

    setProductCounts((prevProductsCount) => ({
      ...prevProductsCount,
      [id]: (prevProductsCount[id] ?? 0) !== 0 ? prevProductsCount[id] - 1 : 1,
    }))
  }

  function incrementCount(id: ProductId) {
    setProductCounts((prevProductsCount) => ({
      ...prevProductsCount,
      [id]: (prevProductsCount[id] ?? 0) + 1,
    }))
  }

  useEffect(() => {
    const updateList: CartTypes[] = Object.entries(productCounts).map(
      ([id, count]) => ({
        id,
        count,
      }),
    )

    const totalCount = updateList.reduce((acc, curr) => acc + curr.count, 0)

    setCountCart(totalCount)
  }, [productCounts])

  return (
    <ShoppingCartContext.Provider
      value={{
        countCart,
        productCounts,
        decrementCount,
        incrementCount,
        productsDataBase,
        cartProducts: Object.entries(productCounts).map(([id, count]) => ({
          id,
          count,
        })),
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
