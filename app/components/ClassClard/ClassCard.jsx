import styles from "./styles.module.css"
import TextSM from "../Text/TextSM";
import ClassCardEntry from "./ClassCardEntry";
import TextM from "../Text/TextM";

export default function ClassCard({ classObj }) {

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
    <div className={styles.ClassCard}>
      
      <TextM>{`Section ${classObj.section}`}</TextM>
      <ClassCardEntry iconSrc="/person.svg" label={classObj.instructor} />
      <ClassCardEntry iconSrc="/school.svg" label={classObj.instructionMethod} />
      <ClassCardEntry iconSrc="/location.svg" label={classObj.room} />
      <ClassCardEntry iconSrc="/date.svg" label={generateScheduleText(classObj.schedule)} />
    </div>
  )
}