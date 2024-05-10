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
  const { updateCart } = useContext(CartContext)

  function updateCount(type: 'increment' | 'decrement') {
    if (type === 'increment') {
      dispatch(incrementCounterAction())
    } else {
      dispatch(decrementCounterAction())
    }
  }

  function handleAddProductInCart(id: string, data: ProductData) {
    if (id === data.id) {
      data.count = countState.count
      updateCart({ ...data }, 'add')
    }
  }

  function coinFormat(value: number) {
    const twoDecimalsPlaces = Math.round(value * 100) / 100

    const valueInString = twoDecimalsPlaces.toFixed(2)

    const [integerPart, decimalPart] = valueInString.split('.')

    const integerPartFormatada = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.',
    )

    return `${integerPartFormatada},${decimalPart}`
  }

  const willBeDisplayed = action
  const price =
    countState.count >= 1
      ? coinFormat(countState.count * data.price)
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
                handleAddProductInCart(data.id, { ...data })
              }}
            >
              <ShoppingCartSimple weight={'fill'} size={22} />
            </ButtonAddItem>
          </AddToCart>
        ) : (
          <RemoveFromCart className="remove">
            <img src={''} alt="" />

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

                <input type="number" value={3} readOnly />

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
              <strong>{`R$ ${price}`}</strong>
            </p>
          </RemoveFromCart>
        )}
      </Container>
    </>
  )
}
