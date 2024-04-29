import styles from './TaskList.module.css'
import { Trash, Check } from '@phosphor-icons/react'


export function TaskList () {
  const isChecked = false
  const checkboxCheckedClassname = isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
  const paragraphCheckedClassname = isChecked ? styles['paragraph-checked'] : ''


  return (
    <div className = {styles.containerWithTasks}>
      <label htmlFor="checkbox" >
        <input readOnly type="checkbox" checked={isChecked} />
        <span className={`${styles.checkBox} ${checkboxCheckedClassname}`}>
          {isChecked && <Check size={17} />}
        </span>

        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </label>

      <button>
        <Trash size={17} color="#808080" />
      </button>
    </div>
  )
}