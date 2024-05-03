import { Container, Navbar, Locale } from './styles'
import coffeeLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin } from '@phosphor-icons/react'
import { Cart } from './components/Cart'

export function Header() {
  return (
    <Container>
      <span>
        <img src={coffeeLogo} alt="" />
      </span>
      <Navbar>
        <ul>
          <li>
            <Locale>
              <MapPin size={22} weight="fill" color="#8047F8" />
              <p>Goiânia - GO</p>
            </Locale>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </Navbar>
    </Container>
  )
}
