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
import { ProductData } from '../../contexts/ShoppingCartContext'

interface ActionsProps {
  action: 'add' | 'delete'
  data: ProductData
}

export function Actions({ action, data }: ActionsProps) {
  const willBeDisplayed = action

  return (
    <>
      <Container>
        {willBeDisplayed === 'add' ? (
          <AddToCart>
            <p>
              R$ <strong> {data.price} </strong>
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
