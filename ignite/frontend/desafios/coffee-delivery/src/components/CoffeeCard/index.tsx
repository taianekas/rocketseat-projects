import {} from 'react'
import { Container, Actions, RemoveItemButton } from './styles'
import { Counter } from '../../components/Counter'
import { Trash } from '@phosphor-icons/react'

export function CoffeeCard() {
  return (
    <Container>
      <img src={''} alt="" />
      <div>
        <p></p>
        <Actions>
          <Counter />

          <RemoveItemButton>
            <Trash size={16} />
            Remover
          </RemoveItemButton>
        </Actions>
      </div>
      <p>
        <span>R$</span>
      </p>
    </Container>
  )
}
