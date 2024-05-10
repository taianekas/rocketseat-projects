import { useContext, useReducer } from 'react'
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
import { ProductData, reducerCount } from '../../reducer/reducer'
import {
  decrementCounterAction,
  incrementCounterAction,
} from '../../reducer/actions'
import { CartContext } from '../../contexts/ShoppingCartContext'

interface ActionsProps {
  action: 'add' | 'delete'
  data: ProductData
}

export function Actions({ action, data }: ActionsProps) {
  const [countState, dispatch] = useReducer(reducerCount, { count: 0 })
  const { addToCart, removeFromCart, coinFormat } = useContext(CartContext)

  function updateCount(type: 'increment' | 'decrement') {
    if (type === 'increment') {
      dispatch(incrementCounterAction())
    } else {
      dispatch(decrementCounterAction())
    }
  }

  function handleAddToCart(id: string, data: ProductData) {
    if (id === data.id) {
      data.count = countState.count
      addToCart({ ...data })
    }
  }

  const willBeDisplayed = action
  const price =
    countState.count >= 1
      ? coinFormat(countState.count * data.price)
      : coinFormat(data.price)

  const newCount = data.count + countState.count
  const newPrice =
    countState.count >= 1
      ? coinFormat(newCount + data.price)
      : coinFormat(data.price)

  return (
    <>
      <Container>
        {willBeDisplayed === 'add' ? (
          <AddToCart>
            <p>
              R$ <strong> {price} </strong>
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

            <ButtonAddItem
              onClick={() => {
                handleAddToCart(data.id, { ...data })
              }}
            >
              <ShoppingCartSimple weight={'fill'} size={22} />
            </ButtonAddItem>
          </AddToCart>
        ) : (
          <RemoveFromCart className="remove">
            <img src={data.image} alt="" />

            <Details className="dois">
              <p>{data.name}</p>

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

              <ButtonRemoveItem onClick={() => removeFromCart(data.id)}>
                <Trash size={16} />
                Remover
              </ButtonRemoveItem>
            </Details>

            <p>
              <strong>{`R$ ${newPrice}`}</strong>
            </p>
          </RemoveFromCart>
        )}
      </Container>
    </>
  )
}
