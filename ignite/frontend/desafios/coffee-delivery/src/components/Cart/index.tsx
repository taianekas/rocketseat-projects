import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { ShoppingCart } from '@phosphor-icons/react'
import { Container, Count } from './styles'

export function Cart() {
  const { countCart } = useContext(ShoppingCartContext)

  const count: number = countCart
  const purchasesInCart = countCart > 0 ? 'visible' : 'hidden'

  return (
    <Container>
      <ShoppingCart size={22} color="#C47F17" weight="fill" />
      <Count>
        <p className={`count-${purchasesInCart}`}>{count}</p>
      </Count>
    </Container>
  )
}
