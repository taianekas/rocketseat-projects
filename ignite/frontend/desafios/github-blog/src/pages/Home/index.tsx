import { PostCard } from './Components/PostCard'
import { Profile } from './Components/Profile'
import { SearchForm } from './Components/SearchForm'
import { Container, PostContainer } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <SearchForm />

      <PostContainer>
        <PostCard />
        <PostCard />
      </PostContainer>
    </Container>
  )
}
