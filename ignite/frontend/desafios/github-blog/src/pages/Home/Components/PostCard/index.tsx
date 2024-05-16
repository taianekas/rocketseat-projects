import { useNavigate } from 'react-router-dom'
import { PostProps } from '../..'
import { formatDistanceDate } from '../../../../utils/formatter'

import { Container, Title } from './styles'

interface PostCardProps {
  data: PostProps
}
export function PostCard({ data }: PostCardProps) {
  const navigate = useNavigate()

  function handleCompletePost() {
    navigate(`/post/${data.number}`)
  }

  return (
    <Container onClick={handleCompletePost}>
      <Title>
        <h1>{data.title}</h1>
        <span>{data.created_at && formatDistanceDate(data.created_at)}</span>
      </Title>

      <div className="description">{data.body}</div>
    </Container>
  )
}
