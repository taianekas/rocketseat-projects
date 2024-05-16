import { PostCard } from './Components/PostCard'
import { Profile } from './Components/Profile'
import { SearchForm } from './Components/SearchForm'
import { Container, PostContainer } from './styles'

export function Home() {
  return (
    <Container>
      <div className="content">
        <Profile />
        <SearchForm />
      </div>

      <PostContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostContainer>
    </Container>
  )
}
