import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import Coffee1 from '../../assets/coffee/Cubano.png'
import Coffee2 from '../../assets/coffee/Havaiano.png'
import { AddressForm } from '../../components/AddressForm'
import { CoffeeCard } from '../../components/CoffeeCard'
import {
  Container,
  CheckoutContent,
  PurchaseDetails,
  CoffeeList,
  ConfirmOrder,
  PayamentDetailsContainer,
  Title,
  PayamentDetails,
} from './styled'

export function Checkout() {
  return (
    <Container>
      <AddressForm />

      <CheckoutContent>
        <CoffeeList>
          <CoffeeCard
            image={Coffee1}
            name="Expresso Tradicional"
            value={'9,90'}
          />
          <CoffeeCard image={Coffee2} name="Latte" value={'9,90'} />
        </CoffeeList>

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
          <label htmlFor={`credit-card`} className={'checkbox-checked'}>
            <CreditCard size={16} />
            Cartão de crédito
            <input id={`credit-card`} type="checkbox" readOnly />
          </label>

          <label htmlFor={`debit-card`} className={'checkbox-unchecked'}>
            <Bank size={16} />
            Cartão de débito
            <input id={`debit-card`} type="checkbox" readOnly />
          </label>

          <label htmlFor={`debit-card`} className={'checkbox-unchecked'}>
            <Money size={16} />
            Dinheiro
            <input id={`money`} type="checkbox" readOnly />
          </label>
        </PayamentDetails>
      </PayamentDetailsContainer>
    </Container>
  )
}
