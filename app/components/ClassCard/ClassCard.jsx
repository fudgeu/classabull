import styles from "./styles.module.css"
import ClassCardEntry from "./ClassCardEntry";
import TextM from "../Text/TextM";
import Image from "next/image";

export default function ClassCard({ classObj, onAdd }) {

  const generateScheduleText = (scheduleObj) => {
    if (scheduleObj[0].startTime === "N/A")
      return "Asynchronous"
      
    let scheduleText = "";

    scheduleObj.forEach(s => {
      if (scheduleText !== "") {
        scheduleText = scheduleText + "; "
      }

      s.days.forEach(d => {
        scheduleText = scheduleText + d
      })

      scheduleText = scheduleText + " "
      scheduleText = scheduleText + s.startTime
      scheduleText = scheduleText + " - "
      scheduleText = scheduleText + s.endTime
    })

    return scheduleText
  }

  return (
    <div className={styles.ClassCardContainer} >
      <div className={styles.ClassCardIndentContainer}>
        <div className={styles.ClassCardIndent} />
      </div>
      <div className={styles.ClassCard}>
        <TextM><b>{`Section ${classObj.section}`}</b></TextM>
        <ClassCardEntry iconSrc="/person.svg" label={classObj.instructor} />
        <ClassCardEntry iconSrc="/school.svg" label={classObj.instructionMethod} />
        <ClassCardEntry iconSrc="/location.svg" label={classObj.room} />
        <ClassCardEntry iconSrc="/date.svg" label={generateScheduleText(classObj.schedule)} />
      </div>
      <div className={styles.ClassCardButtons}>
        <button type="button" className={styles.ClassCardAddButton} onClick={() => onAdd(classObj.crn)}>
          <Image src="/add.svg" width="25" height="25" />
        </button>
      </div>
    </div>
  )
}