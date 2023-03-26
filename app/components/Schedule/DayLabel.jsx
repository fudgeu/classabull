import TextM from '../Text/TextM'
import styles from './daylabel.module.css'

export default function DayLabel({ label }) {
  return (
    <div className={styles.DayLabel}>
      <TextM>{label}</TextM>
    </div>
  )
}