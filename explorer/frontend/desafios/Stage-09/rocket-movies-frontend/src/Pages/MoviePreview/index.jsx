import { Header } from '../../Components/Header';
import { Container, Content, Description, InfoUser, Title, Button } from './styles';
import { FiClock } from 'react-icons/fi';
import { api } from '../../Services/api'
import { Rating } from '../../Components/Rating';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../Assets/avatar_placeholder.svg';
import { useParams, useNavigate } from 'react-router-dom';

export const MoviePreview = () => {
  const [ data, setData ] = useState({});
  const [ dateFormatted, setDateFormatted] = useState(null);
  const [ tags, setTags ] = useState([]);

  const { user } = useAuth();

  const avatar = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const userConfirm = window.confirm('Tem certeza que deseja excluir?');

    if(userConfirm) {
      try {
        await api.delete(`/notes/${params.id}`);
        alert('O filme foi excluído com sucesso!');
        navigate('/');
      } catch (error) {
        if(error.response) {
          alert(error.message.data.message);
        } else {
          alert('Não foi possível exluir o filme');
          console.log(error);
        }
      }
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  useEffect( () => {
    if (data.updated_at) {
      const initialFormat = data.updated_at;

      const [date, hour] = initialFormat.split(" ");

      const [year, month, day] = date.split("-");

      const [hours, minutes] = hour.split(":");

      setDateFormatted({
        date: `${day}/${month}/${year}`,
        hour: `${hours - 3}:${minutes}`,
      });
    }
  }, [data]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/notes/${params.id}`);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(
            "Não foi possível carregar  os dados deste filme. Tente novamente mais tarde."
          );
          navigate(-1);
          console.log(error);
        }
      }
    }

    fetchData();
  }, []);


  useEffect( () => {
    const fetchTags = async () => {
      const response = await api.get('/tags');
      setTags(response.data)
    }

    fetchTags()
  },[])

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <section>
            <Title>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize/>
            </Title>

            <InfoUser>
              <img src={avatar} alt="Foto do usuário" />
              <p> Por {user.name}</p>
              <FiClock />
              <span>{dateFormatted && (
                <span>{dateFormatted.date} às {dateFormatted.hour}</span>
              )}
              </span>
            </InfoUser>

          {
            data.description && (<Description>{data.description}</Description>)
          }

        </section>
        <div className="buttons">
        <Button onClick={handleBack}>Voltar</Button>
        <Button onClick={handleDelete}>Excluir nota</Button>
        </div>

        </Content>
      
      </main>
    </Container>
  )
}
