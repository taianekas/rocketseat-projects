import { Container } from './styles';


export const Section = ({title, children, style}) => {
  return (
    <Container>
      <h2 style = {style}>{title}</h2>
      {children}
    </Container>
  )
}
