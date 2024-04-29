import './global.css'
import styles from './App.module.css'
import Logo from './assets/logo.svg'

export function App() {
  return (
    <div>
      <header className = {styles.header}>
        <img src = { Logo } alt = 'Logotipo do site ToDo List' />
      </header>
    </div>
  )
}


