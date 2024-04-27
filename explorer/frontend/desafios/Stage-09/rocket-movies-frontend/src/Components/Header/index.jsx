import { Container, Profile } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../Services/api';
import avatarPlaceholder from '../../Assets/avatar_placeholder.svg';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate()

    const handleSignOut = () => {
      navigate('/');
      signOut();
    }

  return (
    <Container>
     
      <h1>RocketMovies</h1>

      <Profile>
        <div>
        <Link to = '/profile'>{user.name}</Link>

        <button onClick = {handleSignOut}>Sair</button>
        </div>

        <img src={avatarUrl} alt={user.name} />
      </Profile>
      

    </Container>
  )
}
