import { useState } from 'react';
import { Background, Container, Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button'
import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const navigate = useNavigate()

  const handleSignIn = () => {
    signIn({ email, password })
    navigate('/')
  };

  return (
    <Container>
      <Form>

      <h1>RocketMovies</h1>
      <p>Aplicação parra acompanhar tudo que quiser</p>
      <h2>Faça seu login</h2>
    
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
      
      <Button title = 'Entrar' onClick ={ handleSignIn }/>

      <Link to = '/register'>Criar conta</Link>
      </Form>

      <Background />
      
    </Container>
  )
}
