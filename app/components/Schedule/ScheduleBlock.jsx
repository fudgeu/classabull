import clsx from 'clsx'
import TextM from '../Text/TextM'
import TextSM from '../Text/TextSM'
import styles from './scheduleblock.module.css'

export default function ScheduleBlock({ active, title, times }) {
  return (
    <div className={clsx({
      [styles.ScheduleBlock]: true,
      [styles.ScheduleBlockActive]: active
    })}>
      <TextM><b>{title}</b></TextM>
      <TextSM>{times}</TextSM>
    </div>
  )
}