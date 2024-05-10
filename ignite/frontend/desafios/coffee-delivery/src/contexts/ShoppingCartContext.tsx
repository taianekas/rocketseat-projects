import { ReactNode, createContext, useReducer } from 'react'
import { CartState, ProductData, reducerCart } from '../reducer/reducer'
import { ProductsList } from '../data'
import { addProductInCart, removeProductFromCart } from '../reducer/actions'

interface CartContextTypes {
  ListProducts: ProductData[]
  cartState: CartState
  updateCart: (data: ProductData, type: 'add' | 'remove') => void
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

  const [cartState, dispatch] = useReducer(reducerCart, initialState)

  const ListProducts: ProductData[] = ProductsList.map((items) => ({
    ...items,
    tag: items.tag.map((tag) => tag.title),
    count: 0,
  }))

  function updateCart(data: ProductData, type: 'add' | 'remove') {
    const newProduct: ProductData = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image,
      count: data.count,
      tag: null,
      description: data.description,
    }

    if (type === 'add') {
      dispatch(addProductInCart(newProduct))
    } else {
      dispatch(removeProductFromCart(data.id))
    }
    console.log(cartState)
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        ListProducts,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
