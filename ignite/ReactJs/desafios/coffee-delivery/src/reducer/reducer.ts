import { produce } from 'immer'
import { ActionCart } from './@types/CartTypes'
import { ActionCount } from './@types/CountTypes'
import { ActionsTypeCount, ActionsTypeCart } from './actions'
import { OrderInfo } from '../pages/Checkout'
import { v4 as uuidv4 } from 'uuid'

export interface ProductData {
  id: string
  tag: string[] | null
  name: string
  description: string
  price: number
  image: string
  count: number
  totalPrice?: number
}

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: string
  items: Item[]
}

export interface CartState {
  product: ProductData[]
  productId: string
  cart: Item[]
  orders: Order[]
}

export interface CountState {
  count: number
}

export function reducerCart(state: CartState, action: ActionCart) {
  switch (action.type) {
    case ActionsTypeCart.ADD_TO_CART: {
      return produce(state, (draft) => {
        draft.product.push(action.payload.newProductInCart!)
      })
    }

    case ActionsTypeCart.REMOVE_FROM_CART: {
      const updatedProducts = state.product.filter(
        (item) => item.id !== action.payload.productId,
      )

      return {
        ...state,
        product: updatedProducts,
      }
    }

    case ActionsTypeCart.CHECKOUT_CART: {
      return produce(state, (draft) => {
        const newOrder = {
          id: uuidv4(),
          items: state.cart,
          ...action.payload.order!,
        }

        if (!draft.orders) {
          draft.orders = []
        }

        draft.orders.push(newOrder)
        draft.cart = []

        if (action.payload.callback) {
          action.payload.callback(`/order/${newOrder.id}/success`)
        }
      })
    }

    default:
      return state
  }
}

export function reducerCount(state: CountState, action: ActionCount) {
  switch (action.type) {
    case ActionsTypeCount.DECREMENT_QUANTITY:
      return {
        count: state.count <= 1 ? 1 : state.count - 1,
      }

    case ActionsTypeCount.INCREMENT_QUANTITY:
      return {
        count: state.count + 1,
      }

    default:
      throw new Error('❌ ERROR ❌')
  }
}
