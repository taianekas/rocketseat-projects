import { Container, CardInfo, Tags, Links } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostCardInfo() {
  return (
    <Container>
      <CardInfo>
        <Links>
          <a href={'#'}>
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </a>
          <a href={'#'}>
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Links>
        <h1>{'JavaScript data types and data structures'}</h1>
        <Tags>
          <p>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            {'duronne'}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
            </span>
            {'Há 1 dia'}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faComment} />
            </span>
            {'5 comentários'}
          </p>
        </Tags>
      </CardInfo>
    </Container>
  )
}
