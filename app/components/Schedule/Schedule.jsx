'use client'

import { useEffect, useState } from 'react'
import DayLabel from './DayLabel'
import ScheduleBlock from './ScheduleBlock'
import styles from './styles.module.css'
import TimeBlock from './TimeBlock'

const startTimes = [
  "8:00AM",
  "9:30AM",
  "11:00AM",
  "12:30PM",
  "2:00PM",
  "3:30PM",
  "5:00PM",
  "6:30PM",
]

async function getClassesByCRNs(crns) {
  let classes = []
  for (var crnIndex in crns) {
    let crn = crns[crnIndex]
    let classObj = await fetch(`http://localhost:3000/api/getClassByCRN?crn=${crn}`)
      .then(response => response.json())
    classes.push(classObj)
  }
  return classes
}

export default function Schedule({ addedClasses }) {

  const [ classes, setClasses ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const rawResults = await getClassesByCRNs(addedClasses);
      setClasses(rawResults)
    }
    fetchData();
  }, [addedClasses])

  const generateDaysEvents = (day) => {
    if (classes.length < 1) return [];

    const foundClasses = [];
    const foundSchedules = [];

    classes.forEach(c => {
      const foundSchedule = c.schedule.find(s => {
        return s.days.includes(day);
      })
      if (typeof foundSchedule !== 'undefined') {
        foundSchedules.push(foundSchedule)
        foundClasses.push(`${c.subject} ${c.courseNumber}`)
      }
    })
    /*const foundSchedule = classes[0].schedule.find(s => {
      return s.days.includes(day);
    })*/

    return startTimes.map(t => {
      let foundClass;
      let i = 0;
      const foundSchedule = foundSchedules.find(s => {
        if (t === s.startTime) {
          foundClass = foundClasses[i]
          return true;
        }
        i++
        return false;
      })

      if (typeof foundSchedule !== 'undefined') {
        return <ScheduleBlock active title={foundClass} times={`${foundSchedule.startTime} - ${foundSchedule.endTime}`} />
      } else {
        return <ScheduleBlock active={false} />
      }

      /*if (typeof foundSchedule !== 'undefined' && t === foundSchedule.startTime) {
        console.log("ADDING")
        return <ScheduleBlock active />
      }
      return <ScheduleBlock active={false} />*/
    })
  }

  const generateTimeBlocks = () => {
    return startTimes.map(t => {
      return <TimeBlock time={t} />
    })
  }

  return (
    <div className={styles.ScheduleContainer}>
      <div className={styles.ScheduleColumn}>
        <div style={{height: "50px"}} />
        {generateTimeBlocks()}
      </div>
      <div className={styles.VerticalDivider} />
      <div className={styles.ScheduleColumn}>
        <DayLabel label="Monday" />
        {generateDaysEvents("M")}
      </div>
      <div className={styles.VerticalDivider} />
      <div className={styles.ScheduleColumn}>
        <DayLabel label="Tuesday" />
        {generateDaysEvents("T")}

      </div>
      <div className={styles.VerticalDivider} />
      <div className={styles.ScheduleColumn}>
        <DayLabel label="Wednesday" />
        {generateDaysEvents("W")}

      </div>
      <div className={styles.VerticalDivider} />
      <div className={styles.ScheduleColumn}>
        <DayLabel label="Thursday" />
        {generateDaysEvents("R")}
      </div>
      <div className={styles.VerticalDivider} />
      <div className={styles.ScheduleColumn}>
        <DayLabel label="Friday" />
        {generateDaysEvents("F")}
      </div>
    </div>
  )
}