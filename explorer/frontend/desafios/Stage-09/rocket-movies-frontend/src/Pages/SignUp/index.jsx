import { useState } from 'react';
import { Background, Container, Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button'
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../Services/api';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = () => {
    if(!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api.post('/users', {name, email, password})
    .then(() => { 
      alert('Cadastro realizado com sucesso.') 
      navigate('/');
    })
    .catch( error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar usuário.')
      }
    })
  }




  return (
    <Container>
      <Form>

      <h1>RocketMovies</h1>
      <p>Aplicação parra acompanhar tudo que quiser</p>
      <h2>Crie sua conta</h2>
    
      <Input 
        placeholder = 'Nome'
        type = 'text'
        icon ={FiUser}
        onChange = {e => setName(e.target.value)}
      />
      <Input 
        placeholder = 'E-mail'
        type = 'email'
        icon ={FiMail}
        onChange = {e => setEmail(e.target.value)}
      />
      <Input 
        placeholder = 'Senha'
        type = 'password'
        icon ={FiLock}
        onChange = {e => setPassword(e.target.value)}
      />

      <Button title = 'Cadastrar' onClick = {handleSignUp}/>

      <Link to = '/'> <FiArrowLeft /> Voltar para o login</Link>
      </Form>

      <Background />
      
    </Container>
  )
}
