import styles from './Task.module.css'
import { Empty } from './Empty'
import { TaskList } from './TaskList'

export function Task () {
  return (
    <div className = {styles.content}>
      <div className = {styles.taskStatus}>
        <p className = {styles.createdTasks}>
          Tarefas criadas
          <span>0</span>
        </p>
        <p className = {styles.completedTasks}>
          Concluídas
          <span>0</span>
        </p>
      </div>
      <div className = {styles.contentTasks}>
        <Empty />
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </div>
  )
}