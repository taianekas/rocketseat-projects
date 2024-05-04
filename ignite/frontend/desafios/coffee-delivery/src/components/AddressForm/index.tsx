import { MapPinLine } from '@phosphor-icons/react'
import {
  Container,
  Title,
  FormContainer,
  PostalCodeInput,
  StreetInput,
  NumberInput,
  AdditionalAddressInformationInput,
  NeighborhoodInput,
  CityInput,
  StateAbbreviationInput,
} from './styled'

export function AddressForm() {
  return (
    <Container>
      <Title>
        <p>
          <span>
            <MapPinLine color="#C47F17" size={22} />
          </span>
          {'Endereço de Entrega'}
        </p>
        <p>{'Informe o endereço onde deseja receber o seu pedido'}</p>
      </Title>

      <FormContainer>
        <PostalCodeInput
          id="postal-code"
          placeholder="CEP"
          type="text"
          required
        />
        <StreetInput id="street" placeholder="Rua" type="text" required />
        <div>
          <NumberInput id="number" placeholder="Número" type="text" required />
          <AdditionalAddressInformationInput
            id="additional-address-information"
            placeholder="Complemento"
            type="text"
          />
        </div>
        <div>
          <NeighborhoodInput
            id="neighborhood"
            placeholder="Bairro"
            type="text"
            required
          />
          <CityInput id="city" placeholder="Cidade" type="text" required />
          <StateAbbreviationInput
            id="state-abbreviation"
            placeholder="UF"
            type="text"
            required
          />
        </div>
      </FormContainer>
    </Container>
  )
}
