import { useReducer } from 'react'
import {
  Container,
  AddToCart,
  ButtonAddItem,
  RemoveFromCart,
  Details,
  ButtonRemoveItem,
  Counter,
  Button,
} from './styled'
import { ShoppingCartSimple, Trash, Minus, Plus } from '@phosphor-icons/react'
import { ProductData } from '../../contexts/ShoppingCartContext'
import {
  decrementCounterAction,
  incrementCounterAction,
} from '../../reducer/actions'
import { reducerCount } from '../../reducer/reducer'

interface ActionsProps {
  action: 'add' | 'delete'
  data: ProductData
}

export function Actions({ action, data }: ActionsProps) {
  const [countState, dispatch] = useReducer(reducerCount, { count: 1 })

  function updateCount(type: 'increment' | 'decrement') {
    if (type === 'increment') {
      dispatch(incrementCounterAction())
    } else {
      dispatch(decrementCounterAction())
    }
  }

  const willBeDisplayed = action
  return (
    <>
      <Container>
        {willBeDisplayed === 'add' ? (
          <AddToCart>
            <p>
              R$ <strong> {data.price} </strong>
            </p>

            <Counter>
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
            </Counter>

            <ButtonAddItem onClick={() => {}}>
              <ShoppingCartSimple weight={'fill'} size={22} />
            </ButtonAddItem>
          </AddToCart>
        ) : (
          <RemoveFromCart className="remove">
            <img src={''} alt="" />

            <Details className="dois">
              <p>Expresso</p>

              <Counter>
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
              </Counter>

              <ButtonRemoveItem onClick={() => {}}>
                <Trash size={16} />
                Remover
              </ButtonRemoveItem>
            </Details>

            <p>
              <strong>{`R$ $`}</strong>
            </p>
          </RemoveFromCart>
        )}
      </Container>
    </>
  )
}
