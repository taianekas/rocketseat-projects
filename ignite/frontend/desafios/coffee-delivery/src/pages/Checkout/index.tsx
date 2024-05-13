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
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { Actions } from '../../components/Actions'

export function Checkout() {
  const { cartState, cartListLength, coinFormat } = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let total = 0
    cartState.product.forEach((item) => {
      total += item.price * item.count
    })
    setTotalPrice(total)
  }, [cartState])

  return (
    <Container>
      <pre>{JSON.stringify(cartState, null, 2)}</pre>
      <AddressForm />

      <CheckoutContent>
        {cartState.product
          .slice()
          .sort((a, b) => a.id.localeCompare(b.name))
          .map((item) => (
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
            Total<span>R$ {coinFormat(totalPrice)}</span>
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
