import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { Container, Icon, Intro, Menu } from './styles'
import imgIntro from '../../assets/coffee-intro.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Catalog } from '../../components/Catalog'

export function Home() {
  const { productsDataBase } = useContext(ShoppingCartContext)

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
        {productsDataBase.map((items) => (
          <Catalog key={items.id} {...items} data={{ ...items }} />
        ))}
      </Menu>
      <pre>{JSON.stringify(productsDataBase, null, 2)}</pre>
    </Container>
  )
}
