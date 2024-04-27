import { useState, useEffect } from 'react';
import { Container, Profile } from './styles';
import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';
import { api } from '../../Services/api';
import avatarPlaceholder from '../../Assets/avatar_placeholder.svg';
import { Link, useNavigate } from 'react-router-dom';


export const HeaderHome = () => {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [ search, setSearch]  = useState('');
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate()

    const handleSignOut = () => {
      navigate('/');
      signOut();
    }

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get(`/notes?title=${search}`);

        setNotes(response.data);
        
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(
            "Não foi possível carregar os filmes. Tente recarregar a página."
          );
          console.log(error);
        }
      }
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
     
      <h1>RocketMovies</h1>
      <Input 
        placeholder = 'Pesquise pelo título'
        onChange={e => setSearch(e.target.value)}
      />
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
