import { NavigateFunction } from 'react-router-dom'
import { OrderInfo } from '../../pages/Checkout'
import { ActionsTypeCart } from '../actions'
import { ProductData } from '../reducer'

export interface ActionCart {
  type: ActionsTypeCart // Aqui você define que todas as ações têm uma propriedade 'type'
  payload: {
    newProductInCart?: ProductData
    productId?: string
    order?: OrderInfo
    callback?: NavigateFunction
  }
}

// Defina interfaces para cada tipo de ação
export interface addProductInCartActionType extends ActionCart {
  type: ActionsTypeCart.ADD_TO_CART
  payload: {
    newProductInCart: ProductData
  }
}

export interface removeProductFromActionType extends ActionCart {
  type: ActionsTypeCart.REMOVE_FROM_CART
  payload: {
    productId: string
  }
}

export interface checkoutCartActionType extends ActionCart {
  type: ActionsTypeCart.CHECKOUT_CART
  payload: {
    order: OrderInfo
    callback: NavigateFunction
  }
}
// Defina um tipo de união para todas as ações possíveis
export type ActionTypeCart =
  | addProductInCartActionType
  | removeProductFromActionType
  | checkoutCartActionType
