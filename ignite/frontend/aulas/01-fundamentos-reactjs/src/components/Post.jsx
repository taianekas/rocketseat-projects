import styles from './Post.module.css'
import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Post ({ author, publishedAt, content}) {
  const [comments, setComments] = useState(['Post muito bacana!'])
  const [newCommentText, setNewCommentText] = useState([''])


  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {locale: ptBR})
  const publihsedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange (event) {
    setNewCommentText(event.target.value)
  }

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
              return <p key={line.content}>{line.content}</p>

            } else if (line.type == 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          onChange={handleNewCommentChange} 
          value={newCommentText}
          placeholder='Deixe seu comentário' 
          name='comment' 
        />

        <footer>
          <button type='submit'> Publicar </button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {

            return <Comment key = {comment} content = {comment}/>
          })
        }

      </div>
    </article>
  )
}