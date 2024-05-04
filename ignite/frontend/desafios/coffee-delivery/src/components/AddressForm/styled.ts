import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${(props) => props.theme.GRAY[200]};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  object-fit: cover;
  padding: 4rem;
  border-radius: 6px;
`
export const Title = styled.div`
  width: 100%;

  p {
    color: ${(props) => props.theme.GRAY[800]};
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  p + p {
    font-size: 1.4rem;
    margin-left: 3rem;
  }
`

export const FormContainer = styled.form`
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
