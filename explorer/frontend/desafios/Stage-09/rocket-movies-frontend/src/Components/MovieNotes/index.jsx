import { Container } from './styles';
import {StarColor} from '../StarColor'
import {StarEmpty} from '../StarEmpty'
import { Tag } from '../Tag'


export const MovieNotes = ({data, ...rest}) => {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div>
        { data.rating && data.rating === 0 ? <> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
        { data.rating && data.rating === 1 ? <> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
        { data.rating && data.rating === 2 ? <> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> <StarEmpty/> </> : ''}
        { data.rating && data.rating === 3 ? <> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> <StarEmpty/> </> : ''}
        { data.rating && data.rating === 4 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarEmpty/> </> : ''}
        { data.rating && data.rating === 5 ? <> <StarColor/> <StarColor/> <StarColor/> <StarColor/> <StarColor/> </> : ''}
      </div>
      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
          data.tags.map( tag => <Tag key={tag.id} title={tag.name} /> )
          }
        </footer>
      }
    </Container>
  );
}
