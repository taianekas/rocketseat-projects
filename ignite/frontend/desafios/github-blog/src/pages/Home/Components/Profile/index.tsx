import { Container, ProfileInfo, Tags, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <Container>
      <img src={'https://github.com/duronne.png'} alt={''} />
      <ProfileInfo>
        <Title>
          {' Taiane Karine'}
          <a href={'#'}>
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Title>
        <p>
          {
            'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'
          }
        </p>
        <Tags>
          <p>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            {'duronne'}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            {'Empresa'}
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            {'32 seguidores'}
          </p>
        </Tags>
      </ProfileInfo>
    </Container>
  )
}
