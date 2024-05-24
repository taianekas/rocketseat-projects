import styles from './TaskList.module.css'
import { Trash, Check } from '@phosphor-icons/react'

export interface TaskListProps {
  id: string
  text: string
  isChecked: boolean
  onDelete: (id:string) => void
  onToggle: (data: { id: string; value: boolean }) => void 
}

export function TaskList ({ id, text, isChecked, onDelete, onToggle }: TaskListProps) {
  function handleRemoveTask() {
    onDelete(id)
  }

  function handleToggle() {
    onToggle({id, value: !isChecked} );
  }

  const checkboxCheckedClassname = isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
  const paragraphCheckedClassname = isChecked ? styles['paragraph-checked'] : ''

  return (
    <div className = {styles.containerWithTasks}>
      <label htmlFor={`checkbox-${id}`} >
        <input id={`checkbox-${id}`} readOnly type='checkbox' checked={isChecked} onClick={handleToggle}/>
        <span className={`${styles.checkBox} ${checkboxCheckedClassname}`}>
          {isChecked && <Check size={17} />}
        </span>

        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
          { text }
        </p>
      </label>

      <button type='submit' onClick={handleRemoveTask}>
        <Trash size={17} color='#808080' />
      </button>
    </div>
  )
}