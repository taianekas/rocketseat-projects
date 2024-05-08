import { useContext } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'
import { Button, Container } from './styles'
import {
  ProductData,
  ShoppingCartContext,
} from '../../contexts/ShoppingCartContext'

interface CounterProps {
  data: ProductData
}

export function Counter({ data }: CounterProps) {
  const { productCounts, decrementCount, incrementCount } =
    useContext(ShoppingCartContext)

  const count = productCounts[data.id] ?? 0

  return (
    <>
      <Container>
        <Button
          onClick={() => {
            decrementCount(data.id)
          }}
        >
          <Minus weight="bold" />
        </Button>

        <input type="number" value={count} readOnly />

        <Button
          onClick={() => {
            incrementCount(data.id)
          }}
        >
          <Plus weight="bold" />
        </Button>
      </Container>
    </>
  )
}
