import './global.css'
import styles from './App.module.css'
import Logo from './assets/logo.svg'
import { Input } from './Input'
import { Task } from './Task'
import { TaskListProps } from './TaskList'
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState<TaskListProps[]>([])

  function addTask(task: TaskListProps) {
    setTasks((prevTasks) => [...prevTasks, task])
  }
  
  function getIdTask(id: string) {
    const idTask = tasks.filter( item => {
      return item.id !== id
    })

    setTasks(idTask)
  }


  return (
    <div>
      <header className = {styles.header}>
        <img src = { Logo } alt = 'Logotipo do site ToDo List' />
      </header>

      <main>
        <Input onAddTask={addTask}/>
        <Task 
          countCreatedTasks={tasks.length}
          task = {tasks}
          getIdTask = {getIdTask}
        />
      </main>
    </div>
  )
}


