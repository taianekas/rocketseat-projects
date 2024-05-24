import { PostCardInfo } from './Components/PostCardInfo'
import { Container, Description } from './styles'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { PostProps } from '../Home'
import ReactMarkdown from 'react-markdown'

export function Post() {
  const [postData, setPostData] = useState<PostProps>({} as PostProps)
  const params = useParams()

  const fetchPost = useCallback(async () => {
    const response = await api.get<PostProps>(
      `/repos/taianekarine/teste/issues/${params.issueNumber}`,
    )

    setPostData(response.data)
  }, [params])

  useEffect(() => {
    fetchPost()
  }, [params, fetchPost])

  return (
    <Container>
      <PostCardInfo data={postData} />
      <Description>
        <ReactMarkdown>{postData.body}</ReactMarkdown>
      </Description>
    </Container>
  )
}
