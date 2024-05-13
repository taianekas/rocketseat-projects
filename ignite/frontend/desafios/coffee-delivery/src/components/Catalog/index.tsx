import {} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Container, CoffeeInfo, TagsContent, Tag } from './styles'
import { Actions } from '../Actions'
import { ProductData } from '../../contexts/CartProvider'

interface CatalogProps {
  data: ProductData
}

export function Catalog({ data }: CatalogProps) {
  return (
    <Container>
      <div className="img-container">
        <img src={data.image} alt="" />
      </div>

      <TagsContent>
        {data.tag.map((item) => (
          <Tag key={uuidv4()}> {item} </Tag>
        ))}
      </TagsContent>

      <CoffeeInfo>
        <h1> {data.name} </h1>
        <p> {data.description} </p>
      </CoffeeInfo>
      <Actions action="add" data={data} />
    </Container>
  )
}
