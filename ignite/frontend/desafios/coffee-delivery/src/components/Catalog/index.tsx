import {} from 'react'
import { Container, CoffeeInfo, TagsContent, Tag } from './styles'
import { Actions } from '../Actions'
import { ProductData } from '../../contexts/ShoppingCartContext'

export interface CatalogProps {
  data: ProductData
}

export function Catalog({ data }: CatalogProps) {
  return (
    <Container>
      <div className="img-container">
        <img src={data.image} alt="" />
      </div>

      <TagsContent>
        <Tag>{data.tag}</Tag>
      </TagsContent>

      <CoffeeInfo>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </CoffeeInfo>
      <Actions data={data} action="add" />
    </Container>
  )
}
