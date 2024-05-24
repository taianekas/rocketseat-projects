import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, OrderInfo, Icon, Info } from './styles'
import imgIlustration from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { useParams } from 'react-router-dom'

export function Sucess() {
  const { orders } = useContext(CartContext)
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === orderId)
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <div className="text-container">
        <h1>{'Uhu! Pedido confirmado'}</h1>
        <p>{'Agora é só aguardar que logo o café chegará até você'}</p>
      </div>

      <section>
        <Info>
          <OrderInfo>
            <div>
              <Icon statuscolor="purple">
                <MapPin weight="fill" size={16} />
              </Icon>

              <p className="delivery">
                Entrega em{' '}
                <span>
                  {orderInfo.street}, {orderInfo.number}{' '}
                </span>
                {orderInfo.neighborhood}
              </p>
            </div>

            <div>
              <Icon statuscolor="yellow">
                <Timer weight="fill" size={16} />
              </Icon>

              <p className="timer">
                Previsão de entrega <span>{'20 min - 30 min'}</span>
              </p>
            </div>

            <div>
              <Icon statuscolor="yellowDark">
                <CurrencyDollar size={16} />
              </Icon>

              <p className="pay">
                Pagamento na entrega{' '}
                <span>{paymentMethod[orderInfo.paymentMethod]}</span>
              </p>
            </div>
          </OrderInfo>
        </Info>
        <img src={imgIlustration} alt="" />
      </section>
    </Container>
  )
}
