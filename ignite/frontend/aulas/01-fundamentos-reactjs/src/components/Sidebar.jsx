import styles from './Sidebar.module.css'
import ImageCapa from '../assets/imagem-capa.jpg'
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar () {
  return (
    <aside className = {styles.sidebar} >
      <img className = {styles.cover} src= {ImageCapa} alt= 'Imagem de capa'/>
      <div className = {styles.profile} >
        <img className = {styles.avatar} src = 'https://github.com/duronne.png' alt= 'Imagem de usuario' />
        <strong>Taiane Karine</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilLine />
        Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}