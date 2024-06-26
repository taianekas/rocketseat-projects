import { Container, Icon, Intro, Menu } from './styles'
import imgIntro from '../../assets/coffee-intro.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Catalog } from '../../components/Catalog'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export function Home() {
  const { ListProducts } = useContext(CartContext)
  return (
    <Container>
      <Intro>
        <div>
          <h1>{'Encontre o café perfeito para qualquer hora do dia'}</h1>
          <p>
            {
              'Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.'
            }
          </p>

          <div className="items">
            <p>
              <Icon statuscolor="yellowDark">
                <ShoppingCart weight="fill" size={16} />
              </Icon>
              {'Compra simples e segura.'}
            </p>

            <p>
              <Icon statuscolor="gray">
                <Package weight="fill" size={16} />
              </Icon>
              {'Embalagem mantém o café intacto'}
            </p>

            <p>
              <Icon statuscolor="yellow">
                <Timer weight="fill" size={16} />
              </Icon>
              {'Entrega rápida e rastreada'}
            </p>

            <p>
              <Icon statuscolor="purple">
                <Coffee weight="fill" size={16} />
              </Icon>
              {'O café chega fresquinho até você'}
            </p>
          </div>
        </div>

        <img src={imgIntro} alt="" />
      </Intro>
      <Menu>
        {ListProducts.map((item) => (
          <Catalog key={item.id} data={{ ...item }} />
        ))}
      </Menu>
    </Container>
  )
}
