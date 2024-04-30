import styles from './Task.module.css'
import { Empty } from './Empty'
import { TaskList } from './TaskList'
import { TaskListProps } from './TaskList'
import { useState } from 'react'

export interface TaskProps {
  countCreatedTasks: number,
  task: TaskListProps[],
  getIdTask: (id: string) => void,
}

export function Task ({ countCreatedTasks, task, getIdTask}: TaskProps ) {
  const [, setTasks] = useState<TaskListProps[]>([])
  const [newState, setNewState] = useState(0)

  function deleteTask (taskId: string) {
    task.filter( item => {
      return item.id !== taskId
    })

    getIdTask(taskId)

    setNewState((state) => {
      return state - 1
    })
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const newTasks = task.map((item) => {
      if (item.id === id) {
        item.isChecked = value;
      }
      return item;
    })

    const newCount = task.filter(item => item.isChecked).length
    setNewState(newCount)
    setTasks(newTasks)
  }

  return (
    <div className = {styles.content}>
      <div className = {styles.taskStatus}>
        <p className = {styles.createdTasks}>
          Tarefas criadas
          <span>{countCreatedTasks}</span>
        </p>
        <p className = {styles.completedTasks}>
          Concluídas
          <span>{newState}</span>
        </p>
      </div>
      <div className = {styles.contentTasks}>
        {
          task && task.length > 0 ? (

          task.map((item) => (
            <TaskList
              key = {item.id}
              id = {item.id}
              text = {item.text}
              isChecked = {item.isChecked}
              onDelete={() => deleteTask (item.id)}
              onToggle= {handleToggleTask}
            />
          ))
          ) : <Empty />
        }
      </div>
    </div>
  )
}