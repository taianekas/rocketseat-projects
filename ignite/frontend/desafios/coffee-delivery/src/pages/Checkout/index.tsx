import {
  Container,
  CheckoutContent,
  PurchaseDetails,
  ConfirmOrder,
  PayamentDetailsContainer,
  Title,
  PayamentDetails,
  AddressForm,
  TitleForm,
  PostalCodeInput,
  FormContainer,
  StreetInput,
  NumberInput,
  AdditionalAddressInformationInput,
  NeighborhoodInput,
  CityInput,
  StateAbbreviationInput,
} from './styled'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { Actions } from '../../components/Actions'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Radio } from '../../components/Radio'

type FormInputs = {
  postalCode: string
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  stateAbbreviation: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const validationAddressFormSchema = zod.object({
  postalCode: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o logradouro'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  stateAbbreviation: zod.string().min(2, 'Informe o UF').max(2),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = zod.infer<typeof validationAddressFormSchema>

export function Checkout() {
  const { cartState, cartListLength, coinFormat, checkout } =
    useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState(0)

  const shippingCost = 3.5 * cartListLength

  useEffect(() => {
    let total = 0
    cartState.product.forEach((item) => {
      total += item.price * item.count
    })
    setTotalPrice(total)
  }, [cartState, shippingCost])

  const { register, handleSubmit, watch } = useForm<FormInputs>({
    resolver: zodResolver(validationAddressFormSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cartListLength === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    checkout(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleOrderCheckout)}>
      <AddressForm>
        <TitleForm>
          <p>
            <span>
              <MapPinLine color="#C47F17" size={22} />
            </span>
            {'Endereço de Entrega'}
          </p>
          <p>{'Informe o endereço onde deseja receber o seu pedido'}</p>
        </TitleForm>

        <FormContainer>
          <PostalCodeInput
            id="postal-code"
            placeholder="CEP"
            type="text"
            {...register('postalCode')}
          />
          <StreetInput
            id="street"
            placeholder="Rua"
            type="text"
            {...register('street')}
          />
          <div>
            <NumberInput
              id="number"
              placeholder="Número"
              type="text"
              {...register('number')}
            />
            <AdditionalAddressInformationInput
              id="additional-address-information"
              placeholder="Complemento"
              type="text"
              {...register('fullAddress')}
            />
          </div>
          <div>
            <NeighborhoodInput
              id="neighborhood"
              placeholder="Bairro"
              type="text"
              {...register('neighborhood')}
            />
            <CityInput
              id="city"
              placeholder="Cidade"
              type="text"
              {...register('city')}
            />
            <StateAbbreviationInput
              id="state-abbreviation"
              placeholder="UF"
              type="text"
              {...register('stateAbbreviation')}
            />
          </div>
        </FormContainer>
      </AddressForm>

      <CheckoutContent>
        {cartState.product
          .slice()
          .sort((a, b) => a.id.localeCompare(b.name))
          .map((item) => (
            <Actions key={item.id} data={{ ...item }} action="delete" />
          ))}
        <PurchaseDetails>
          <p>
            Total de itens<span>{cartListLength}</span>
          </p>
          <p>
            Entrega<span>R$ {coinFormat(shippingCost)}</span>
          </p>
          <h3>
            Total<span>R$ {coinFormat(totalPrice + shippingCost)}</span>
          </h3>
        </PurchaseDetails>
        <ConfirmOrder type="submit">Confirmar Pedido</ConfirmOrder>
      </CheckoutContent>

      <PayamentDetailsContainer>
        <Title>
          <p>
            <span>
              <CurrencyDollar size={22} />
            </span>
            {'Pagamento'}
          </p>
          <p>
            {'O pagamento é feito na entrega. Escolha a forma que deseja pagar'}
          </p>
        </Title>

        <PayamentDetails>
          <Radio
            isSelected={selectedPaymentMethod === 'credit'}
            {...register('paymentMethod')}
            value="credit"
          >
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </Radio>

          <Radio
            isSelected={selectedPaymentMethod === 'debit'}
            {...register('paymentMethod')}
            value="debit"
          >
            <Bank size={16} />
            <span>Cartão de débito</span>
          </Radio>

          <Radio
            isSelected={selectedPaymentMethod === 'cash'}
            {...register('paymentMethod')}
            value="cash"
          >
            <Money size={16} />
            <span>Dinheiro</span>
          </Radio>
        </PayamentDetails>
      </PayamentDetailsContainer>
    </Container>
  )
}
