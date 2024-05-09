import { ActionsTypeCount } from '../actions'

export interface ActionCount {
  type: ActionsTypeCount // Aqui você define que todas as ações têm uma propriedade 'type'
}

// Defina interfaces para cada tipo de ação
interface IncrementAction extends ActionCount {
  type: ActionsTypeCount.INCREMENT_QUANTITY
}

interface DecrementAction extends ActionCount {
  type: ActionsTypeCount.DECREMENT_QUANTITY
}

// Defina um tipo de união para todas as ações possíveis
export type ActionTypeCount = IncrementAction | DecrementAction
