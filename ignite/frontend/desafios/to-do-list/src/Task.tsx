import styles from './Task.module.css'
import { Empty } from './Empty'
import { TaskList } from './TaskList'
import { TaskListProps } from './TaskList'

export interface TaskProps {
  countCreatedTasks: number,
  countCompletedTasks: number,
  task: TaskListProps[]
  onDeleteTask: (id: string) => void
}

export function Task ({ countCreatedTasks, countCompletedTasks, task, onDeleteTask}: TaskProps ) {

  function deleteTask (taskId: string) {
    task.filter( item => {
      return item.id !== taskId
    })

    onDeleteTask(taskId)
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
          <span>{countCompletedTasks}</span>
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
            />
          ))
          ) : <Empty />
        }
      </div>
    </div>
  )
}