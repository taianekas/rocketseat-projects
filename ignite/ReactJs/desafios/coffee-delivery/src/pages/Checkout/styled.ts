import styled from 'styled-components'

export const Container = styled.form`
  display: grid;
  grid-template-columns: 64rem 44.8rem;
  grid-template-areas:
    'Form Aside'
    'Pay Aside';
  justify-content: space-between;
  gap: 3.2rem;
`

export const CheckoutContent = styled.aside`
  background-color: ${(props) => props.theme.GRAY[200]};
  width: 100%;
  max-height: 80rem;
  border-radius: 6px 44px 6px 44px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  grid-area: Aside;
`
export const CoffeeList = styled.div`
  padding-top: 1rem;
  max-height: 52rem;
  overflow: scroll;
  background-color: red;
`

export const PurchaseDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  font-size: 1.4rem;
  gap: 1.2rem;

  > p,
  h3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
export const ConfirmOrder = styled.button`
  width: 100%;
  height: 4.6rem;
  margin: 2.4rem 0;
  background-color: ${(props) => props.theme.YELLOW[400]};
  color: ${(props) => props.theme.WHITE};
  text-transform: uppercase;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 800;
  transition: 0.2s background-color;

  &:hover {
    background-color: ${(props) => props.theme.YELLOW[800]};
  }
`

export const PayamentDetailsContainer = styled.section`
  background-color: ${(props) => props.theme.GRAY[200]};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 6px;

  svg path {
    color: ${(props) => props.theme.PURPLE[400]};
  }
`
export const Title = styled.div`
  width: 100%;

  p {
    color: ${(props) => props.theme.GRAY[800]};
    display: flex;
    gap: 0.8rem;
  }

  p + p {
    font-size: 1.4rem;
    margin-left: 3rem;
  }
`

export const PayamentDetails = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  display: flex;
  gap: 1.2rem;

  div {
    width: 100%;
    display: flex;
    gap: 1.6rem;
  }

  label {
    height: 5.1rem;
    font-size: 1.2rem;
    transition: 0.3s background-color;
    cursor: pointer;
  }
`
export const AddressForm = styled.div`
  background-color: ${(props) => props.theme.GRAY[200]};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  object-fit: cover;
  padding: 4rem;
  border-radius: 6px;
`
export const TitleForm = styled.div`
  width: 100%;

  p {
    color: ${(props) => props.theme.GRAY[800]};
    display: flex;
    gap: 0.8rem;
  }

  p + p {
    font-size: 1.4rem;
    margin-left: 3rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  div {
    width: 100%;
    display: flex;
    gap: 1.6rem;
  }
`

const BaseInput = styled.input`
  height: 4.2rem;
  background-color: ${(props) => props.theme.GRAY[300]};
  border: 1px solid ${(props) => props.theme.GRAY[500]};
  color: ${(props) => props.theme.GRAY[700]};
  font-size: 1.4rem;
  padding: 1.2rem;
  border-radius: 6px;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.YELLOW[800]};
  }

  &::placeholder {
    color: ${(props) => props.theme.GRAY[600]};
  }
`

export const PostalCodeInput = styled(BaseInput)`
  width: 20rem;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const NumberInput = styled(BaseInput)`
  width: 20rem;
`

export const AdditionalAddressInformationInput = styled(BaseInput)`
  width: 100%;
`

export const NeighborhoodInput = styled(BaseInput)`
  width: 20rem;
`
export const CityInput = styled(BaseInput)`
  width: 100%;
`

export const StateAbbreviationInput = styled(BaseInput)`
  width: 6rem;
`
