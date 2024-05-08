// import { produce } from 'immer'
// import { ActionCart } from './@types/CartTypes'
import { ActionCount } from './@types/CountTypes'
// import { ActionProduct } from './@types/ProducTypes'
import { ActionsTypeCount } from './actions'

export interface CartState {}
export interface CountState {
  count: number
}
export interface ProductState {}

// products data
// id: string
// tag: string[]
// name: string
// description: string
// price: number
// image: string

// export function reducerCart(state: CartState, action: ActionCart) {}

export function reducerCount(state: CountState, action: ActionCount) {
  switch (action.type) {
    case ActionsTypeCount.DECREMENT_QUANTITY:
      return {
        count: state.count !== 0 ? state.count - 1 : 0,
      }

    case ActionsTypeCount.INCREMENT_QUANTITY:
      return {
        count: state.count + 1,
      }

    default:
      throw new Error('❌ ERROR ❌')
  }
}

// export function reducerProduct(state: ProductState, action: ActionProduct) {}
