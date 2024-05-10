import {} from 'react'
import { Container } from './styles'
import { Actions } from '../Actions'
import { ProductData } from '../../reducer/reducer'

interface ProductCardProps {
  data: ProductData
}

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Container>
      <img src={data.image} alt="" />
      <div>
        <p>{data.name}</p>

        <Actions action="delete" data={data} />
      </div>
      <p>
        <span>R$ {data.price} </span>
      </p>
    </Container>
  )
}
