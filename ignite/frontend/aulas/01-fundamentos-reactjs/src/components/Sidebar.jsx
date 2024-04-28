import styles from './Sidebar.module.css'
import ImageCapa from '../assets/imagem-capa.jpg'
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from './Avatar';

export function Sidebar () {
  return (
    <aside className = {styles.sidebar} >
      <img className = {styles.cover} src= {ImageCapa} alt= 'Imagem de capa'/>
      <div className = {styles.profile} >

        <Avatar 
          src = {'https://github.com/duronne.png'}
          alt = {'Imagem de usuario'}
        />
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