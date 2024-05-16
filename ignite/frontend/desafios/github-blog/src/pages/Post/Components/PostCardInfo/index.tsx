import { Container, CardInfo, Tags, Links } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import { PostProps } from '../../../Home'
import { formatDistanceDate } from '../../../../utils/formatter'

interface PostTitleProps {
  data: PostProps
}

export function PostCardInfo({ data }: PostTitleProps) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <CardInfo>
        <Links>
          <a onClick={handleBack}>
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </a>
          <a href={data.html_url}>
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Links>
        <h1>{data.title}</h1>
        <Tags>
          <p>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            {data.user}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
            </span>
            {formatDistanceDate(data.created_at)}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faComment} />
            </span>
            {data.comments} comentários
          </p>
        </Tags>
      </CardInfo>
    </Container>
  )
}
