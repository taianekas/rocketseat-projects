import { Minus, Plus } from '@phosphor-icons/react'
import { Button, Container } from './styles'
import { useState } from 'react'

export function Counter() {
  const [value, setValue] = useState(0)

  function handleUpdatedCountItem(action: string) {
    if (action === 'add') {
      const result = value + 1
      setValue(result)
    }

    if (action === 'remove') {
      if (!(value <= 0)) {
        const result = value - 1
        return setValue(result)
      }
    }
  }

  return (
    <Container>
      <Button
        onClick={() => {
          handleUpdatedCountItem('remove')
        }}
      >
        <Minus weight="bold" />
      </Button>

      <input type="number" value={value} />

      <Button
        onClick={() => {
          handleUpdatedCountItem('add')
        }}
      >
        <Plus weight="bold" />
      </Button>
    </Container>
  )
}
