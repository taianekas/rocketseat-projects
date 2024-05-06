import {
  Actions,
  Container,
  CoffeeInfo,
  Tag,
  CartButton,
  TagsContent,
} from './styles'
import { Counter } from '../Counter'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

export interface CatalogProps {
  id: string
  tag: string[]
  name: string
  description: string
  value: number
  image: string
  count: number
}

export function Catalog({
  tag,
  name,
  description,
  value,
  image,
}: CatalogProps) {
  const [getNewPrice, setGetNewPrice] = useState(0)

  const Tags = tag.map((title) => ({
    id: uuidv4(),
    title,
  }))

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

  function updatedCount(count: number) {
    setGetNewPrice(count)
  }

  const newPrice = getNewPrice > 0 ? getNewPrice * value : value

  return (
    <>
      <Container>
        <div className="img-container">
          <img src={image} alt="" />
        </div>

        <TagsContent>
          {Tags.map((tag) => {
            return <Tag key={tag.id}>{tag.title}</Tag>
          })}
        </TagsContent>

        <CoffeeInfo>
          <h1>{name}</h1>
          <p>{description}</p>
        </CoffeeInfo>

        <Actions>
          <p>
            <span>{'R$'}</span> {coinFormat(newPrice)}
          </p>
          <div>
            <Counter onAddCount={updatedCount} onDeleteCount={updatedCount} />
            <CartButton>
              <ShoppingCartSimple size={20} weight="fill" />
            </CartButton>
          </div>
        </Actions>
      </Container>
    </>
  )
}
