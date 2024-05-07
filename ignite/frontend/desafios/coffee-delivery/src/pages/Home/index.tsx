import { Container, Icon, Intro, Menu } from './styles'
import imgIntro from '../../assets/coffee-intro.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Catalog } from '../../components/Catalog'
import { CoffeeList } from '../../data'

export function Home() {
  const formattedCoffeeList = CoffeeList.map((coffee) => ({
    id: coffee.id,
    tag: coffee.tag.map((item) => item.title),
    name: coffee.name,
    description: coffee.description,
    price: coffee.price,
    image: coffee.image,
    count: coffee.count,
  }))

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
        {formattedCoffeeList.map((coffee) => (
          <Catalog key={coffee.id} {...coffee} data={{ ...coffee }} />
        ))}
      </Menu>
    </Container>
  )
}
