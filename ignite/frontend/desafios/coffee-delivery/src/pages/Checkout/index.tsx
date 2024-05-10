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
import { useContext } from 'react'
import { CartContext } from '../../contexts/ShoppingCartContext'
import { Actions } from '../../components/Actions'

export function Checkout() {
  const { cartState, cartListLength, coinFormat } = useContext(CartContext)

  return (
    <Container>
      <AddressForm />

      <CheckoutContent>
        {cartState.product.map((item) => (
          <Actions key={item.id} data={{ ...item }} action="delete" />
        ))}
        <PurchaseDetails>
          <p>
            Total de itens<span>{cartListLength}</span>
          </p>
          <p>
            Entrega<span>R$ {coinFormat(cartListLength * 1.5)}</span>
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
