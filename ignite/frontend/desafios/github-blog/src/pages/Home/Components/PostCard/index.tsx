import { PostProps } from '../..'
import { formatDistanceDate } from '../../../../utils/formatter'

import { Container, Title } from './styles'

interface PostCardProps {
  data: PostProps
}
export function PostCard({ data }: PostCardProps) {
  return (
    <Container>
      <Title>
        <h1>{data.title}</h1>
        <span>{formatDistanceDate(data.created_at)}</span>
      </Title>

      <div className="description">{data.body}</div>
    </Container>
  )
}
