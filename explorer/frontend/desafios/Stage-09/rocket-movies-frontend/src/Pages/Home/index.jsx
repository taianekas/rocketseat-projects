import { Container, MyFilms, Note } from "./styles";
import { HeaderHome } from "../../components/HeaderHome";
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../Components/Button';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeNotes } from "../../Components/HomeNotes";
import { api } from '../../Services/api';


export const Home = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleShowFilms = (id) => {
    return navigate(`/moviepreview/${id}`);
  }

  useEffect(() => {

    async function fetchNotes() {
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
  
  
  return(
    <Container>
      <HeaderHome>
 
      </HeaderHome>

      <main>

        <MyFilms>
          <div>
          <h1>Meus filmes</h1>
          <Link to = '/createmovie'>
          <Button 
            icon = {FiPlus}
            title = {'Adicionar filme'}
          />
          </Link>
          </div>
        </MyFilms>

        <Note>
          {notes.length == 0 ? (
              <h2>Nenhum filme encontrado</h2>
            ) : (
              notes.map(note => (
                <HomeNotes
                  data={note}
                  key={String(note.id)}
                  type={'button'}
                  onClick={() => handleShowFilms(note.id)}
                />
              ))
            )}
        </Note>

       </main>
    </Container>
  );
}