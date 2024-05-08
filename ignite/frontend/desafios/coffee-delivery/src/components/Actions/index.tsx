import {} from 'react'
import {
  Container,
  AddToCart,
  ButtonAddItem,
  RemoveFromCart,
  Details,
  ButtonRemoveItem,
} from './styled'
import { Counter } from '../Counter'
import { ShoppingCartSimple, Trash } from '@phosphor-icons/react'

interface ActionsProps {
  action: 'add' | 'delete'
}

export function Actions({ action }: ActionsProps) {
  const willBeDisplayed = action
  return (
    <>
      <Container>
        {willBeDisplayed === 'add' ? (
          <AddToCart>
            <p>
              R$ <strong></strong>
            </p>

            <Counter />

            <ButtonAddItem onClick={() => {}}>
              <ShoppingCartSimple weight={'fill'} size={22} />
            </ButtonAddItem>
          </AddToCart>
        ) : (
          <RemoveFromCart className="remove">
            <img src={''} alt="" />

            <Details className="dois">
              <p>Expresso</p>
              <Counter />
              <ButtonRemoveItem onClick={}>
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
