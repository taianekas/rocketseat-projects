import { Container, Actions, RemoveItemButton } from './styles'
import { Counter } from '../../components/Counter'
import { Trash } from '@phosphor-icons/react'

interface CoffeeCardProps {
  image: string
  name: string
  value: string
}

export function CoffeeCard({ image, name, value }: CoffeeCardProps) {
  return (
    <Container>
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <Actions>
          <Counter />
          <RemoveItemButton>
            <Trash size={16} />
            Remover
          </RemoveItemButton>
        </Actions>
      </div>
      <p>
        <span>R$</span> {value}
      </p>
    </Container>
  )
}
