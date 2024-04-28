import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post (props) {

  console.log(props)
  return (
    <article className = {styles.post} >
      <header>
        <div className = {styles.author} >
          <Avatar 
            src = {'https://github.com/duronne.png'}
            alt = {'Imagem de usuario'}
          />

          <div className = {styles.authorInfo} >
            <strong>Taiane Karine</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime='2024-04-28 06:23:01' title='28 de abril às 06h23'> Publicado há 1h </time>
      </header>

      <div className= {styles.content}>
        <p>Fala galeraa 👋 </p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <a href="#"><p> 👉 taiane.webdeveloper/doctorcare </p> </a>
        <p>
          <a href="#">#novoprojeto {' '} </a>
          <a href="#">#nlw {' '} </a>
          <a href="#">#rocketseat {' '} </a>
        </p>

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