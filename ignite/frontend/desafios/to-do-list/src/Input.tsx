import { PlusCircle } from '@phosphor-icons/react'
import styles from './Input.module.css'

export function Input () {
  return (
    <div className = {styles.wrapper}>
      <input className = {styles.search} type = {'text'} placeholder = {'Adicione uma nova tarefa'}/>

      <button className = {styles.btnCreate} type = {'submit'}>
        Criar
        <PlusCircle weight = {'bold'}/>
      </button>
    </div>
  )
}