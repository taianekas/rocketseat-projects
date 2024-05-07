import { Container, CoffeeInfo, TagsContent } from './styles'
import { Actions, CoffeeProductData } from '../Actions'
import { useState } from 'react'

export interface CatalogProps {
  id: string
  tag: string[]
  name: string
  description: string
  price: number
  image: string
  count: number
  data: CoffeeProductData
}

export function Catalog({ data, tag, name, description, image }: CatalogProps) {
  const [productNewData, setProductNewData] = useState<CoffeeProductData[]>([])

  const getProductData = (value: CoffeeProductData[]) => {
    const newData = value.map((item) => {
      return { ...item }
    })

    setProductNewData(newData)
  }

  return (
    <Container>
      <div className="img-container">
        <img src={image} alt="" />
      </div>

      <TagsContent>{tag}</TagsContent>

      <CoffeeInfo>
        <h1>{name}</h1>
        <p>{description}</p>
      </CoffeeInfo>
      <Actions
        data={data}
        action="add"
        onAddProduct={getProductData}
        onChildChange={getProductData}
      />
      <pre>{JSON.stringify(productNewData, null, 2)}</pre>
    </Container>
  )
}
