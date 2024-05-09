import { ActionsTypeCart } from '../actions'

export interface ActionProduct {
  type: ActionsTypeCart // Aqui você define que todas as ações têm uma propriedade 'type'
}

// Defina interfaces para cada tipo de ação
interface addAction extends ActionProduct {
  type: ActionsTypeCart.ADD_TO_CART
}

interface removeAction extends ActionProduct {
  type: ActionsTypeCart.REMOVE_FROM_CART
}

// Defina um tipo de união para todas as ações possíveis
export type ActionTypeCart = addAction | removeAction
