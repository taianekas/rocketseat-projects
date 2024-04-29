import {v4 as uuidv4} from 'uuid'
import styles from './Task.module.css'
import { Empty } from './Empty'
import { TaskList } from './TaskList'
import { TaskListProps } from './TaskList'

export interface TaskProps {
  countCreatedTasks: number,
  countCompletedTasks: number,
}

export function Task ({ countCreatedTasks, countCompletedTasks }: TaskProps) {
  const listTasks: TaskListProps[] = [
    {
      id: uuidv4(),
      isChecked: true,
      text: 'Primeira tarefa',
    },
    {
      id: uuidv4(),
      isChecked: false,
      text: 'Segunda tarefa',
    },
  ]

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
          listTasks.length > 0 ? (

          listTasks.map((item) => (
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