import {} from 'react'
import { Minus, Plus } from '@phosphor-icons/react'
import { Button, Container } from './styles'

export function Counter() {
  return (
    <>
      <Container>
        <Button>
          <Minus weight="bold" />
        </Button>

        <input type="number" value={1} readOnly />

        <Button>
          <Plus weight="bold" />
        </Button>
      </Container>
    </>
  )
}
