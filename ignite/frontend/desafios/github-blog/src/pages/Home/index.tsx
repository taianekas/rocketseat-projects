import { useCallback, useEffect, useState } from 'react'
import { PostCard } from './Components/PostCard'
import { Profile } from './Components/Profile'
import { SearchForm } from './Components/SearchForm'
import { Container, PostContainer } from './styles'
import { api } from '../../lib/axios'
import { v4 as uuidv4 } from 'uuid'

export interface PostProps {
  user: string
  length: number
  numberPost: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
}

interface SearchPostsProps {
  items: PostProps[]
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get<SearchPostsProps>('search/issues', {
      params: {
        q: query ? query + '%20' : '',
        repo: 'andreviapiana/github-blog',
      },
    })

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <Container>
      <Profile />
      <SearchForm />

      <PostContainer>
        {posts &&
          posts.map((post) => {
            return <PostCard key={uuidv4()} data={post} />
          })}
      </PostContainer>
    </Container>
  )
}
