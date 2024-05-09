import { CartState, ProductState } from './reducer'

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

export function createProductsAction(state: ProductState) {
  return {
    type: ActionsTypeProduct.CREATE_PRODUCT,
    payload: state,
  }
}

export function deleteProductsAction(state: ProductState) {
  return {
    type: ActionsTypeProduct.DELETE_PRODUCT,
    payload: state,
  }
}

export function updateProductsAction(state: ProductState) {
  return {
    type: ActionsTypeProduct.UPDATE_PRODUCT,
    payload: state,
  }
}

export function listProductsAction(state: ProductState) {
  return {
    type: ActionsTypeProduct.LIST_PRODUCT,
    payload: state,
  }
}

export function addToCartAction(state: CartState) {
  return {
    type: ActionsTypeProduct.LIST_PRODUCT,
    payload: state,
  }
}

export function removeFromCartAction(state: CartState) {
  return {
    type: ActionsTypeProduct.LIST_PRODUCT,
    payload: state,
  }
}
