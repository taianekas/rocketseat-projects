import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

export function Comment ({ content, onDeleteComment }) {

  function handleDeleteComent () {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        src = {'https://github.com/duronne.png'}
        alt = {'Imagem de usuario'}
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Taiane Karine</strong>
              <time dateTime='2024-04-28 06:23:01' title='28 de abril às 06h23'> Cerca de 1h atrás </time>
            </div>

            <button 
              title='Deletar comentário'
              onClick={handleDeleteComent}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}