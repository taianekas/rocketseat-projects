import styles from './Header.module.css'
import IgniteLogo from '../assets/ignite-logo.svg'

export function Header () {
  return (
    <header className = {styles.header} >
      <img src= {IgniteLogo} alt= 'Logotipo do Ignite' />
      <h2>Ignite Feed</h2>
    </header>
  )
}