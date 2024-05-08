import { ActionsTypeProduct } from '../actions'

export interface ActionProduct {
  type: ActionsTypeProduct // Aqui você define que todas as ações têm uma propriedade 'type'
}

// Defina interfaces para cada tipo de ação
interface createAction extends ActionProduct {
  type: ActionsTypeProduct.CREATE_PRODUCT
}

interface deleteAction extends ActionProduct {
  type: ActionsTypeProduct.DELETE_PRODUCT
}

interface updateAction extends ActionProduct {
  type: ActionsTypeProduct.UPDATE_PRODUCT
}

interface listAction extends ActionProduct {
  type: ActionsTypeProduct.LIST_PRODUCT
}
// Defina um tipo de união para todas as ações possíveis
export type ActionTypeProduct =
  | createAction
  | deleteAction
  | updateAction
  | listAction
