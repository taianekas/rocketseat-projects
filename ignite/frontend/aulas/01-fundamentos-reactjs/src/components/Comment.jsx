import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react'

export function Comment () {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src='https://github.com/duronne.png' alt='Imagem de usuário' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Taiane Karine</strong>
              <time dateTime='2024-04-28 06:23:01' title='28 de abril às 06h23'> Cerca de 1h atrás </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            Muito bom Taiane, parabéns 👏👏
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