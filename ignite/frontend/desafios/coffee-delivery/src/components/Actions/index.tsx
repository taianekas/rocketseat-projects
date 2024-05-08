import { useContext, useState } from 'react'
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
import {
  ProductData,
  ShoppingCartContext,
} from '../../contexts/ShoppingCartContext'

interface ActionsProps {
  action: 'add' | 'delete'
  data: ProductData
}

export function Actions({ action, data }: ActionsProps) {
  const { productCounts } = useContext(ShoppingCartContext)
  const [productNewData, setProductNewData] = useState([{ ...data }])

  function coinFormat(value: number) {
    const twoDecimalsPlaces = Math.round(value * 100) / 100
    const valueInString = twoDecimalsPlaces.toFixed(2)

    const [integerPart, decimalPart] = valueInString.split('.')

    const integerPartFormatada = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.',
    )

    return `${integerPartFormatada},${decimalPart}`
  }

  function handleRemoveProduct(id: string) {
    const newProduct = productNewData.filter((item) => {
      return item.id !== id
    })
    setProductNewData(newProduct)
  }

  const price =
    productCounts[data.id] > 0
      ? data.price * productCounts[data.id]
      : data.price

  const willBeDisplayed = action
  return (
    <>
      <Container>
        {willBeDisplayed === 'add' ? (
          <AddToCart>
            <p>
              R$ <strong>{coinFormat(price)}</strong>
            </p>

            <Counter data={data} />

            <ButtonAddItem onClick={() => {}}>
              <ShoppingCartSimple weight={'fill'} size={22} />
            </ButtonAddItem>
          </AddToCart>
        ) : (
          <RemoveFromCart className="remove">
            <img src={data.image} alt="" />

            <Details className="dois">
              <p>Expresso</p>
              <Counter data={data} />
              <ButtonRemoveItem onClick={() => handleRemoveProduct(data.id)}>
                <Trash size={16} />
                Remover
              </ButtonRemoveItem>
            </Details>

            <p>
              <strong>{`R$ ${coinFormat(price)}`}</strong>
            </p>
          </RemoveFromCart>
        )}
      </Container>
    </>
  )
}
