import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tag } from "../Tag";


export const HomeNotes = ({data, ...rest }) => {

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating grade={data.rating} isBigSize={false} />
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag title={tag.name} key={tag.id} />
          ))}
        </footer>
      )}
    </Container>
  );
}