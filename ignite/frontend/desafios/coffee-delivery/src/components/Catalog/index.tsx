import {} from 'react'
import { Container, CoffeeInfo, TagsContent, Tag } from './styles'
import { Actions } from '../Actions'

export function Catalog() {
  return (
    <Container>
      <div className="img-container">
        <img src={''} alt="" />
      </div>

      <TagsContent>
        <Tag></Tag>
      </TagsContent>

      <CoffeeInfo>
        <h1></h1>
        <p></p>
      </CoffeeInfo>
      <Actions action="add" />
    </Container>
  )
}
