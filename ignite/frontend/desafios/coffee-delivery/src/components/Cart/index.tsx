import {} from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import { Container, Count } from './styles'

export function Cart() {
  const count: number = 1
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
