import styles from './Input.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import {v4 as uuidv4} from 'uuid'
import { FormEvent, useState } from 'react'
import { TaskListProps } from './TaskList'

interface InputProps {
  onAddTask: (task: TaskListProps) => void
}

export function Input ({ onAddTask  }: InputProps) {
  const [inputValue, setInputValue] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!inputValue.trim()) {
      alert('O campo de tarefa não pode estar vazio!');
      return;
    }

    const newTask:TaskListProps = {
      id: uuidv4(),
      text: inputValue,
      isChecked: true
    }

    onAddTask(newTask)

    setInputValue('')
  }

  return (
    <div className = {styles.wrapper}>
      <input 
        className = {styles.newTask} 
        type = {'text'} 
        placeholder = {'Adicione uma nova tarefa'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className = {styles.btnCreate} type = {'submit'} onClick={handleCreateNewTask}>
        Criar
        <PlusCircle weight = {'bold'}/>
      </button>
    </div>
  )
}