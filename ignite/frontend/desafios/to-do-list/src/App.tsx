import './global.css'
import styles from './App.module.css'
import Logo from './assets/logo.svg'
import { Input } from './Input'
import { Task } from './Task'
import { TaskListProps } from './TaskList'
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState<TaskListProps[]>([])

  function handleAddTask(task: TaskListProps) {
    setTasks((prevTasks) => [...prevTasks, task])
  }
  
  function handleRemoveTask(id: string) {
    const taskWithoutDeletedOne = tasks.filter( item => {
      return item.id !== id
    })

    setTasks(taskWithoutDeletedOne)
  }

  return (
    <div>
      <header className = {styles.header}>
        <img src = { Logo } alt = 'Logotipo do site ToDo List' />
      </header>

      <main>
        <Input onAddTask={handleAddTask}/>
        <Task 
          countCreatedTasks={tasks.length}
          countCompletedTasks={tasks.filter(task => task.isChecked).length}
          task = {tasks}
          onDeleteTask = {handleRemoveTask}
        />
      </main>
    </div>
  )
}


