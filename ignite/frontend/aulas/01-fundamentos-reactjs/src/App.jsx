import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className = {styles.wrapper} >
        <Sidebar />

        <main>
        teste
        </main>
      </div>
    </div>
  )
}


