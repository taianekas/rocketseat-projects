import { Profile } from './Components/Profile'
import { SearchForm } from './Components/SearchForm'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchForm />
    </Container>
  )
}
