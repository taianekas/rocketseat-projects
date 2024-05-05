import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container, OrderInfo, Icon, Info } from './styles'
import imgIlustration from '../../assets/Illustration.svg'

export function Sucess() {
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
                Entrega em <span>{'Rua João Daniel Martinelli, 10 '}</span>
                {'Farrapos - Porto Alegre, RS'}
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
                Pagamento na entrega <span>Cartão de Crédito</span>
              </p>
            </div>
          </OrderInfo>
        </Info>
        <img src={imgIlustration} alt="" />
      </section>
    </Container>
  )
}
