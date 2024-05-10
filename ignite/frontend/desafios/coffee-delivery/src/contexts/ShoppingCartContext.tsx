import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { CartState, ProductData, reducerCart } from '../reducer/reducer'
import { ProductsList } from '../data'
import { addProductInCart, removeProductFromCart } from '../reducer/actions'

interface CartContextTypes {
  cartListLength: number
  ListProducts: ProductData[]
  cartState: CartState
  removeFromCart: (id: string) => void
  addToCart: (data: ProductData) => void
  coinFormat: (value: number) => string
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const initialState: CartState = {
    product: [],
    productId: '',
  }

  const [cartState, dispatch] = useReducer(
    reducerCart,
    initialState,
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery: cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  function coinFormat(value: number) {
    const twoDecimalsPlaces = Math.round(value * 100) / 100

    const valueInString = twoDecimalsPlaces.toFixed(2)

    const [integerPart, decimalPart] = valueInString.split('.')

    const integerPartFormatada = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.',
    )

    return `${integerPartFormatada},${decimalPart}`
  }

  const ListProducts: ProductData[] = ProductsList.map((items) => ({
    ...items,
    tag: items.tag.map((tag) => tag.title),
    count: 0,
  }))

  function addToCart(data: ProductData) {
    const newProduct: ProductData = {
      id: data.id,
      name: data.name,
      price: data.price * data.count,
      image: data.image,
      count: data.count,
      tag: null,
      description: data.description,
    }

    dispatch(addProductInCart(newProduct))
  }

  function removeFromCart(productId: string) {
    dispatch(removeProductFromCart(productId))
  }

  const cartListLength = cartState.product.length

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem(
      '@ignite-coffee-delivery: cycles-state-1.0.0',
      stateJSON,
    )
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cartListLength,
        ListProducts,
        cartState,
        coinFormat,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
