import { Minus, Plus } from '@phosphor-icons/react'
import { Button, Container } from './styles'

export function Counter() {
  return (
    <Container>
      <Button>
        <Minus weight="bold" />
      </Button>

      <p>{'1'}</p>

      <Button>
        <Plus weight="bold" />
      </Button>
    </Container>
  )
}
