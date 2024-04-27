import { Header } from '../../Components/Header';
import { Container, Form } from './styles';
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../Components/Input';
import { Textarea } from '../../Components/TextArea';
import { NoteItem } from '../../Components/NoteItem';
import { Section } from '../../Components/Section';
import { Button } from '../../Components/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../Services/api'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const CreateMovie = () => {
  const [ title, setTitle ] = useState('');
  const { user } = useAuth();
  const [ rating, setRating ] = useState ('');
  const [ description, setDescription ] = useState('');

  const [ tags, setTags ] = useState([]);
  const [ newTags, setNewTags ] = useState('');


  const navigate = useNavigate();

  const handleAddTags = () => {
    setTags(prevState => [...prevState, newTags]);
    setNewTags('');
  }

  const handleRemoveTag = (deleted) => {
    setTags(prevState => prevState.filter( tag => tag !== deleted));
  }

  const handleNewFilm = async () => {
    if(newTags) {
      return alert('Existe conteudo no marcador, mas não clicou no icone de adicionar. Clique para adicionar ou deixe o campo vazio.')
    }

    await api.post('/notes',  {
      title,
      description,
      rating,
      tags,
      user_id: user.id
    });

    alert('Novo filme criado com sucesso.')
    navigate('/');
  }

  return (
    <Container>
      <Header/>
      
      <main>
        <Form>
          <header>
            <Link to = '/'><FiArrowLeft/> Voltar</Link>
            <h1>Novo Filme</h1>
          </header>

          <div className='Inputs'>
            <Input 
              placeholder = 'Títutlo'
              type = 'text'
              onChange = {e => setTitle(e.target.value)}
              required
            />

            <Input 
              placeholder = 'Sua nota (0 a 5)'
              type = 'number'
              min = '0'
              max = '5'
              onChange = {e => setRating(e.target.value)}
              required
            />

          </div>

          <Textarea 
            placeholder = 'Observações'
            onChange = {e => setDescription(e.target.value)}
            required
          />
          
          <Section title = {'Marcadores'}
            style = {{color: '#948F99', fontSize: '2rem'}}
          >
            <div className='tags'>
              {
                tags.map((tags, index) => (
                  <NoteItem
                    key = {String(index)}
                    value = {tags}
                    onClick = {() => handleRemoveTag(tags)}
                  />
                ))
              }


            <NoteItem isNew
              placeholder = {'Nova marcação'}
              onChange = {e => setNewTags(e.target.value)}
              value = {newTags}
              onClick = {handleAddTags}
            />

            </div>
          </Section>

          <div className='buttons'>
            <Button 
              title = {'Adicionar nota'}
              onClick = {handleNewFilm}/>
          </div>
        </Form>
      </main>


    </Container>
  )
}
