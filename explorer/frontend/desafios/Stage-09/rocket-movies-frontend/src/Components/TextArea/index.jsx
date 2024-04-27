import { Container } from './styles';


export const Textarea = ( {value, ...rest} ) => {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}
