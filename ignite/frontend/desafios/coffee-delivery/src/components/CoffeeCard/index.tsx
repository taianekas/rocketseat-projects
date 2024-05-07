import { Container, Actions, RemoveItemButton } from './styles'
import { Counter } from '../../components/Counter'
import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'

interface CoffeeCardProps {
  image: string
  name: string
  price: number
}

export function CoffeeCard({ image, name, price }: CoffeeCardProps) {
  const [amountCounter, setAmountCounter] = useState(0)

  function updatedCount(count: number) {
    setAmountCounter(count)
  }

  function coinFormat(value: number) {
    const twoDecimalsPlaces = Math.round(value * 100) / 100

    const valueInString = twoDecimalsPlaces.toFixed(2)

    const [integerPart, decimalPart] = valueInString.split('.')

    const integerPartFormatada = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.',
    )

    return `${integerPartFormatada},${decimalPart}`
  }
  const newPrice = amountCounter > 0 ? amountCounter * price : price

  return (
    <Container>
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <Actions>
          <Counter onAddCount={updatedCount} onDeleteCount={updatedCount} />

          <RemoveItemButton>
            <Trash size={16} />
            Remover
          </RemoveItemButton>
        </Actions>
      </div>
      <p>
        <span>R$</span> {coinFormat(newPrice)}
      </p>
    </Container>
  )
}
