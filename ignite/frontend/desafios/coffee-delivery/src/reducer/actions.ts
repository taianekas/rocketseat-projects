import { NavigateFunction } from 'react-router-dom'
import { OrderInfo } from '../pages/Checkout'
import {
  addProductInCartActionType,
  checkoutCartActionType,
  removeProductFromActionType,
} from './@types/CartTypes'
import { ProductData } from './reducer'

export enum ActionsTypeCart {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CHECKOUT_CART = 'CHECKOUT_CART',
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

export function checkoutCart(
  order: OrderInfo,
  callback: NavigateFunction,
): checkoutCartActionType {
  return {
    type: ActionsTypeCart.CHECKOUT_CART,
    payload: { order, callback },
  }
}
