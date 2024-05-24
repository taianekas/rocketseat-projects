import { useCallback, useEffect, useState } from 'react'
import { Container, ProfileInfo, Tags, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../../../lib/axios'

interface ProfileProps {
  avatarURL: string
  bio: string
  htmlURL: string
  followers: number
  login: string
  name: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({
    avatarURL: '',
    bio: '',
    htmlURL: '',
    followers: 1,
    login: '',
    name: '',
  })

  const fetchProfile = useCallback(async () => {
    const response = await api.get('/users/taianekarine')

    const {
      avatar_url: avatarURL,
      bio,
      html_url: htmlURL,
      followers,
      login,
      name,
    } = response.data

    const filteredData = {
      avatarURL,
      bio,
      htmlURL,
      followers,
      login,
      name,
    }

    setProfile(filteredData)
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <Container>
      <img src={profile.avatarURL} alt={''} />
      <ProfileInfo>
        <Title>
          {profile.name}
          <a href={'#'}>
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Title>
        <p>{profile.bio}</p>
        <Tags>
          <p>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            {profile.login}
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
            {profile.followers} seguidores
          </p>
        </Tags>
      </ProfileInfo>
    </Container>
  )
}
