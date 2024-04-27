import { Container } from './styles';
import starImg from '../../Assets/starempty.svg'


export const StarEmpty = () => {
  return (
    <Container>
      <img src={starImg} alt="imagem de estrela" />
    </Container>
  )
}
