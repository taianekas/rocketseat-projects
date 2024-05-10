import { produce } from 'immer'
import { ActionCart } from './@types/CartTypes'
import { ActionCount } from './@types/CountTypes'
import { ActionsTypeCount, ActionsTypeCart } from './actions'

export interface ProductData {
  id: string
  tag: string[] | null
  name: string
  description: string
  price: number
  image: string
  count: number
}

export interface CartState {
  product: ProductData[]
  productId: string
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
      return produce(state, (draft) => {
        draft.product.filter((item) => item.id !== state.productId)
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
