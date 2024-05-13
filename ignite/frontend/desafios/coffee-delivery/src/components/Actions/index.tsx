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
import { CartContext } from '../../contexts/CartProvider'

interface ActionsProps {
  action: 'add' | 'delete'
  data: ProductData
}

export function Actions({ action, data }: ActionsProps) {
  const [countState, dispatch] = useReducer(reducerCount, { count: data.count })
  const { addToCart, removeFromCart, coinFormat } = useContext(CartContext)
  const willBeDisplayed = action

  const price =
    countState.count >= 1 ? countState.count * data.price : data.price

  function countIncrement() {
    dispatch(incrementCounterAction())
  }

  function countDecrement() {
    dispatch(decrementCounterAction())
  }

  function handleAddToCart(id: string, data: ProductData) {
    if (id === data.id) {
      data.count = countState.count
      data.totalPrice = data.count * data.price

      addToCart({ ...data })
    }
  }

  function countIncrementInCart(id: string, data: ProductData) {
    removeFromCart(id)
    dispatch(incrementCounterAction())

    if (id === data.id) {
      data.count = countState.count + 1
      data.totalPrice = data.count * data.price

      addToCart({ ...data })
    }
  }

  function countDecrementInCart(id: string, data: ProductData) {
    removeFromCart(id)
    dispatch(decrementCounterAction())

    if (id === data.id) {
      data.count = countState.count - 1 <= 1 ? 1 : countState.count - 1
      data.totalPrice = data.count * data.price

      addToCart({ ...data })
    }
  }

  return (
    <>
      <Container>
        {willBeDisplayed === 'add' ? (
          <AddToCart>
            <p>
              R$ <strong> {coinFormat(price)} </strong>
            </p>

            <Counter>
              <Button
                onClick={() => {
                  countDecrement()
                }}
              >
                <Minus weight="bold" />
              </Button>

              <input type="number" value={countState.count} readOnly />

              <Button
                onClick={() => {
                  countIncrement()
                }}
              >
                <Plus weight="bold" />
              </Button>
            </Counter>

            <ButtonAddItem
              onClick={() => {
                handleAddToCart(data.id, data)
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
                    countDecrementInCart(data.id, data)
                  }}
                >
                  <Minus weight="bold" />
                </Button>

                <input type="number" value={countState.count} readOnly />

                <Button
                  onClick={() => {
                    countIncrementInCart(data.id, data)
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
              <strong>{`R$ ${coinFormat(price)}`}</strong>
            </p>
          </RemoveFromCart>
        )}
      </Container>
    </>
  )
}
