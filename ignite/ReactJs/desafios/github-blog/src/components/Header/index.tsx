import { Container } from './styles'
import backgroundImage from '../../assets/header-bg.png'

export function Header() {
  return (
    <Container>
      <img src={backgroundImage} alt={''} />
    </Container>
  )
}
