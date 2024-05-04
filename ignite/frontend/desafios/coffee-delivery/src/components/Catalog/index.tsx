import { Actions, Container, CoffeeInfo, Tag, CartButton } from './styles'
import coffeImg from '../../assets/coffee/Americano.png'
import { Counter } from '../Counter'
import { ShoppingCartSimple } from '@phosphor-icons/react'

export function Catalog() {
  return (
    <Container>
      <div className="img-container">
        <img src={coffeImg} alt="" />
      </div>

      <Tag>{'Tradicional'}</Tag>

      <CoffeeInfo>
        <h1>{'Expresso Tradicional'}</h1>
        <p>{'O tradicional café feito com água quente e grãos moídos'}</p>
      </CoffeeInfo>

      <Actions>
        <p>
          <span>{'R$'}</span> {'9,90'}
        </p>
        <Counter />
        <CartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </CartButton>
      </Actions>
    </Container>
  )
}
