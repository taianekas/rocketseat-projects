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

export interface CatalogProps {
  tag: string[]
  name: string
  description: string
  value: number
  image: string
}

export function Catalog({
  tag,
  name,
  description,
  value,
  image,
}: CatalogProps) {
  const Tags = tag.map((title, index) => ({
    id: `id${index + 1}`,
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

  return (
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
          <span>{'R$'}</span> {coinFormat(value)}
        </p>
        <div>
          <Counter />
          <CartButton>
            <ShoppingCartSimple size={20} weight="fill" />
          </CartButton>
        </div>
      </Actions>
    </Container>
  )
}
