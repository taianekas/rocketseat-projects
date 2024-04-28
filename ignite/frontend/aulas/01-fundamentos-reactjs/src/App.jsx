import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

export function App() {
  return (
    <div>
      <Header />

      <div className = {styles.wrapper} >
        <Sidebar />

        <Post /> 
      </div>
    </div>
  )
}


