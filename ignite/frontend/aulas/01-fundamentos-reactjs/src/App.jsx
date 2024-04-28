import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/duronne.png',
      name: 'Taiane Karine',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋 ',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ',
      },
      {
        type: 'link',
        content: '👉 taiane.webdeveloper/doctorcare',
      },
    ],
    publishedAt: new Date('2024-04-28 17:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/taianekarine.png',
      name: 'Taiane Karine',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋 ',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ',
      },
      {
        type: 'link',
        content: '👉 taianekarine.webdeveloper/doctorcare',
      },
    ],
    publishedAt: new Date('2024-04-25 17:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className = {styles.wrapper} >
        <Sidebar />
        <main>
          {
            posts.map((post) => {
              return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            })
          }
        </main>

      </div>
    </div>
  )
}


