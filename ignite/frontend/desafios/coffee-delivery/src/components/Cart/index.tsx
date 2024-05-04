import { ShoppingCart } from '@phosphor-icons/react'
import { Container, Count } from './styles'

export function Cart() {
  const countCart = 0
  const purchasesInCart = countCart > 0 ? 'visible' : 'hidden'

  return (
    <Container>
      <ShoppingCart size={22} color="#C47F17" weight="fill" />
      <Count>
        <p className={`count-${purchasesInCart}`}>{countCart}</p>
      </Count>
    </Container>
  )
}
