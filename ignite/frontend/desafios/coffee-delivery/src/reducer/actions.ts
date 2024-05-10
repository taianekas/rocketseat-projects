import {
  addProductInCartActionType,
  removeProductFromActionType,
} from './@types/CartTypes'
import { ProductData } from './reducer'

export enum ActionsTypeCart {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export enum ActionsTypeCount {
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
}

export function decrementCounterAction() {
  return {
    type: ActionsTypeCount.DECREMENT_QUANTITY,
  }
}

export function incrementCounterAction() {
  return {
    type: ActionsTypeCount.INCREMENT_QUANTITY,
  }
}

export function addProductInCart(
  newProductInCart: ProductData,
): addProductInCartActionType {
  return {
    type: ActionsTypeCart.ADD_TO_CART,
    payload: { newProductInCart },
  }
}

export function removeProductFromCart(
  productId: string,
): removeProductFromActionType {
  return {
    type: ActionsTypeCart.REMOVE_FROM_CART,
    payload: { productId },
  }
}
