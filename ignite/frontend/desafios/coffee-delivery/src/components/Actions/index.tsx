import { useState } from 'react'
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
import { ProductData } from '../../contexts/ShoppingCartContext'

interface ActionsProps {
  action: 'add' | 'delete'
  data: ProductData
}

export function Actions({ action, data }: ActionsProps) {
  const [amountCounter, setAmountCounter] = useState(0)
  const [productNewData, setProductNewData] = useState([{ ...data }])

  function updatedCount(count: number) {
    setAmountCounter(count)
  }

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

  function handleAddNewProduct(data: ProductData) {
    const newProduct = productNewData.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          count: amountCounter,
          price: amountCounter !== 0 ? data.price * amountCounter : item.price,
        }
      }
      return item
    })
    setProductNewData(newProduct)
  }

  function handleRemoveProduct(id: string) {
    const newProduct = productNewData.filter((item) => {
      return item.id !== id
    })
    setProductNewData(newProduct)
  }

  const newPrice = amountCounter > 0 ? amountCounter * data.price : data.price

  const willBeDisplayed = action
  return (
    <>
      <Container>
        {willBeDisplayed === 'add' ? (
          <AddToCart>
            <p>
              R$ <strong>{coinFormat(newPrice)}</strong>
            </p>

            <Counter onAddCount={updatedCount} onDeleteCount={updatedCount} />

            <ButtonAddItem
              onClick={() => {
                handleAddNewProduct({ ...data })
              }}
            >
              <ShoppingCartSimple weight={'fill'} size={22} />
            </ButtonAddItem>
          </AddToCart>
        ) : (
          <RemoveFromCart className="remove">
            <img src={data.image} alt="" />

            <Details className="dois">
              <p>Expresso</p>
              <Counter onAddCount={updatedCount} onDeleteCount={updatedCount} />
              <ButtonRemoveItem onClick={() => handleRemoveProduct(data.id)}>
                <Trash size={16} />
                Remover
              </ButtonRemoveItem>
            </Details>

            <p>
              <strong>{`R$ ${coinFormat(newPrice)}`}</strong>
            </p>
          </RemoveFromCart>
        )}
      </Container>
    </>
  )
}
