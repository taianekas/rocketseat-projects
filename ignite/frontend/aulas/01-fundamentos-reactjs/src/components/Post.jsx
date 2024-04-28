import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post ({ author, publishedAt, content}) {

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {locale: ptBR})
  const publihsedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className = {styles.post} >
      <header>
        <div className = {styles.author} >
          <Avatar 
            src = {author.avatarUrl}
            alt = {'Imagem de usuario'}
          />

          <div className = {styles.authorInfo} >
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={publishedDateFormated}> 
          {publihsedDateRelativeToNow}
       </time>
      </header>

      <div className= {styles.content}>
        { 
          content.map( (line) => {
            if (line.type == 'paragraph') {
              return <p>{line.content}</p>

            } else if (line.type == 'link') {
              return <p><a href="#">{line.content}</a></p>
            }

          })
        }
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário'/>

        <footer>
          <button type='submit'> Publicar </button>
        </footer>

      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}