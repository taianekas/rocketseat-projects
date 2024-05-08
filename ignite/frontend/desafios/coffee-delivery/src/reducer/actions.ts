import { CartState, CountState, ProductState } from './reducer'

export enum ActionsTypeCart {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export enum ActionsTypeCount {
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
}

export enum ActionsTypeProduct {
  CREATE_PRODUCT = 'CREATE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  LIST_PRODUCT = 'LIST_PRODUCT',
}

export function decrementCounter(state: CountState) {
  return {
    type: ActionsTypeCount.DECREMENT_QUANTITY,
    payload: state,
  }
}

export function incrementCounter(state: CountState) {
  return {
    type: ActionsTypeCount.INCREMENT_QUANTITY,
    payload: state,
  }
}

export function createProducts(state: ProductState) {
  return {
    type: ActionsTypeProduct.CREATE_PRODUCT,
    payload: state,
  }
}

export function deleteProducts(state: ProductState) {
  return {
    type: ActionsTypeProduct.DELETE_PRODUCT,
    payload: state,
  }
}

export function updateProducts(state: ProductState) {
  return {
    type: ActionsTypeProduct.UPDATE_PRODUCT,
    payload: state,
  }
}

export function listProducts(state: ProductState) {
  return {
    type: ActionsTypeProduct.LIST_PRODUCT,
    payload: state,
  }
}

export function addToCart(state: CartState) {
  return {
    type: ActionsTypeProduct.LIST_PRODUCT,
    payload: state,
  }
}

export function removeFromCart(state: CartState) {
  return {
    type: ActionsTypeProduct.LIST_PRODUCT,
    payload: state,
  }
}
