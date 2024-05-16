import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 7.2rem;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.8rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0 0 1.2rem 0;

    span {
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-span']};
      font-weight: 400;
    }
  }
`

export const InputText = styled.input`
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  width: 100%;
  height: 5rem;

  padding: 1.2rem 1.6rem;
  border-radius: 6px;
  color: ${(props) => props.theme['base-label']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
