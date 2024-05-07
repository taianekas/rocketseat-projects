import { Minus, Plus } from '@phosphor-icons/react'
import { Button, Container } from './styles'
import { useEffect, useState } from 'react'

interface CounterProps {
  onAddCount: (value: number) => void
  onDeleteCount: (value: number) => void
}

export function Counter({ onAddCount, onDeleteCount }: CounterProps) {
  const [count, setCount] = useState(0)

  function handleDecrementCount() {
    setCount((prevCount) => (prevCount !== 0 ? prevCount - 1 : 0))
  }

  function handleIncrementCount() {
    setCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    onAddCount(count)
    onDeleteCount(count)
  }, [count, onAddCount, onDeleteCount])

  return (
    <>
      <Container>
        <Button onClick={handleDecrementCount}>
          <Minus weight="bold" />
        </Button>

        <input type="number" value={count} readOnly />

        <Button onClick={handleIncrementCount}>
          <Plus weight="bold" />
        </Button>
      </Container>
    </>
  )
}
