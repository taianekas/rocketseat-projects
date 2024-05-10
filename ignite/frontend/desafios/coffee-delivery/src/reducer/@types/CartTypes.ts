import { ActionsTypeCart } from '../actions'
import { ProductDataInCart } from '../reducer'

export interface ActionCart {
  type: ActionsTypeCart // Aqui você define que todas as ações têm uma propriedade 'type'
  payload: {
    newProductInCart?: ProductDataInCart
    productId?: string
  }
}

// Defina interfaces para cada tipo de ação
export interface addProductInCartActionType extends ActionCart {
  type: ActionsTypeCart.ADD_TO_CART
  payload: {
    newProductInCart: ProductDataInCart
  }
}

export interface removeProductFromActionType extends ActionCart {
  type: ActionsTypeCart.REMOVE_FROM_CART
  payload: {
    productId: string
  }
}

// Defina um tipo de união para todas as ações possíveis
export type ActionTypeCart =
  | addProductInCartActionType
  | removeProductFromActionType
