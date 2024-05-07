import {
  Container,
  CheckoutContent,
  PurchaseDetails,
  ConfirmOrder,
  PayamentDetailsContainer,
  Title,
  PayamentDetails,
} from './styled'
import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { AddressForm } from '../../components/AddressForm'

export function Checkout() {
  return (
    <Container>
      <AddressForm />

      <CheckoutContent>
        <PurchaseDetails>
          <p>
            Total de itens<span>R$ 29,70</span>
          </p>
          <p>
            Entrega<span>R$ 3,50</span>
          </p>
          <h3>
            Total<span>R$ 33,20</span>
          </h3>
        </PurchaseDetails>
        <ConfirmOrder>Confirmar Pedido</ConfirmOrder>
      </CheckoutContent>

      <PayamentDetailsContainer>
        <Title>
          <p>
            <span>
              <CurrencyDollar size={22} />
            </span>
            {'Pagamento'}
          </p>
          <p>
            {'O pagamento é feito na entrega. Escolha a forma que deseja pagar'}
          </p>
        </Title>

        <PayamentDetails>
          <label htmlFor={`credit-card`} className={'method-selected'}>
            <CreditCard size={16} />
            Cartão de crédito
            <input id={`credit-card`} type="radio" readOnly />
          </label>

          <label htmlFor={`debit-card`} className={'method-unselected'}>
            <Bank size={16} />
            Cartão de débito
            <input id={`debit-card`} type="radio" readOnly />
          </label>

          <label htmlFor={`debit-card`} className={'method-unselected'}>
            <Money size={16} />
            Dinheiro
            <input id={`money`} type="radio" readOnly />
          </label>
        </PayamentDetails>
      </PayamentDetailsContainer>
    </Container>
  )
}
