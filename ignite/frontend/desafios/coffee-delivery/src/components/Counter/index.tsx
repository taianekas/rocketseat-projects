import { useReducer } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'
import { Button, Container } from './styles'
import { reducerCount } from '../../reducer/reducer'
import {
  decrementCounterAction,
  incrementCounterAction,
} from '../../reducer/actions'

export function Counter() {
  const [countState, dispatch] = useReducer(reducerCount, { count: 1 })

  function updateCount(type: 'increment' | 'decrement') {
    if (type === 'increment') {
      dispatch(incrementCounterAction())
    } else {
      dispatch(decrementCounterAction())
    }
  }

  return (
    <>
      <Container>
        <Button
          onClick={() => {
            updateCount('decrement')
          }}
        >
          <Minus weight="bold" />
        </Button>

        <input type="number" value={countState.count} readOnly />

        <Button
          onClick={() => {
            updateCount('increment')
          }}
        >
          <Plus weight="bold" />
        </Button>
      </Container>
    </>
  )
}
