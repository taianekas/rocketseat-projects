import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { CartState, Order, ProductData, reducerCart } from '../reducer/reducer'
import { ProductsList } from '../data'
import {
  addProductInCart,
  checkoutCart,
  removeProductFromCart,
} from '../reducer/actions'
import { OrderInfo } from '../pages/Checkout'
import { useNavigate } from 'react-router-dom'

interface CartContextTypes {
  orders: Order[]
  cartListLength: number
  ListProducts: ProductData[]
  cartState: CartState
  removeFromCart: (id: string) => void
  addToCart: (data: ProductData) => void
  coinFormat: (value: number) => string
  checkout: (order: OrderInfo) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextTypes)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const initialState: CartState = {
    product: [],
    cart: [],
    orders: [],
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

  const { orders } = cartState
  const navigate = useNavigate()

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
    count: 1,
  }))

  function addToCart(data: ProductData) {
    const newProduct: ProductData = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image,
      count: data.count,
      tag: null,
      description: data.description,
      totalPrice: data.count * data.price,
    }

    dispatch(addProductInCart(newProduct))
  }

  function removeFromCart(productId: string) {
    dispatch(removeProductFromCart(productId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCart(order, navigate))
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
        checkout,
        cartListLength,
        ListProducts,
        cartState,
        coinFormat,
        addToCart,
        removeFromCart,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
