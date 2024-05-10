import { useContext } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import { Container, Count } from './styles'
import { CartContext } from '../../contexts/ShoppingCartContext'

export function Cart() {
  const { cartState } = useContext(CartContext)

  const cartProductLength = cartState.product.length
  const count: number = cartProductLength > 0 ? cartProductLength : 0
  const purchasesInCart = count > 0 ? 'visible' : 'hidden'

  return (
    <Container>
      <ShoppingCart size={22} color="#C47F17" weight="fill" />
      <Count>
        <p className={`count-${purchasesInCart}`}>{count}</p>
      </Count>
    </Container>
  )
}
