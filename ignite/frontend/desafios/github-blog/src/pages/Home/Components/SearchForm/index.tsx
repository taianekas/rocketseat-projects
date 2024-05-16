import { SearchFormContainer, InputText } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <p>
        Publicações <span>{'6 publicações'}</span>
      </p>

      <InputText placeholder={'Buscar conteúdo'} />
    </SearchFormContainer>
  )
}
