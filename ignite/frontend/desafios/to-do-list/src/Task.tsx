import styles from './Task.module.css'
import { Empty } from './Empty'
import { TaskList } from './TaskList'
import { TaskListProps } from './TaskList'

export interface TaskProps {
  countCreatedTasks: number,
  countCompletedTasks: number,
  task: TaskListProps[]
}

export function Task ({ countCreatedTasks, countCompletedTasks, task}: TaskProps ) {

  return (
    <div className = {styles.content}>
      <div className = {styles.taskStatus}>
        <p className = {styles.createdTasks}>
          Tarefas criadas
          <span>{countCreatedTasks}</span>
        </p>
        <p className = {styles.completedTasks}>
          Concluídas
          <span>{countCompletedTasks}</span>
        </p>
      </div>
      <div className = {styles.contentTasks}>
        {
          task && task.length > 0 ? (

          task.map((item) => (
            <TaskList
              key = {item.id}
              text = {item.text}
              isChecked = {item.isChecked}
            />
          ))
          ) : <Empty />
        }
      </div>
    </div>
  )
}