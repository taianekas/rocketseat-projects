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
    </Container>
  )
}
