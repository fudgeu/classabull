import TextM from '../Text/TextM'
import styles from './scheduleblock.module.css'

export default function TimeBlock({ time }) {
  return (
    <div className={styles.TimeBlock}>
      <TextM>{time}</TextM>
    </div>
  )
}