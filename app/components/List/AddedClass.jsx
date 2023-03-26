import Image from "next/image"
import ClassCardEntry from "../ClassCard/ClassCardEntry"
import TextLG from "../Text/TextLG"
import TextM from "../Text/TextM"
import TextSM from "../Text/TextSM"
import styles from "./styles.module.css"

export default function AddedClass({ classObj, onDelete }) {

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
    <div className={styles.AddedClassParent}>
      <div className={styles.AddedClassContainer}>
        <div className={styles.AddedClass}>

          <div className={styles.AddedClassInfo}>
            <TextLG>{`${classObj.subject} ${classObj.courseNumber}`}</TextLG>
            <TextSM>{classObj.title}</TextSM>
          </div>
        </div>

        <div className={styles.ExtraInfoContainer} >
          <div className={styles.ExtraInfoIndentContainer}>
            <div className={styles.ExtraInfoIndent} />
          </div>
          <div className={styles.ExtraInfo}>
            <TextM>{`Section ${classObj.section}`}</TextM>
            <ClassCardEntry iconSrc="/person.svg" label={classObj.instructor} />
            <ClassCardEntry iconSrc="/school.svg" label={classObj.instructionMethod} />
            <ClassCardEntry iconSrc="/location.svg" label={classObj.room} />
            <ClassCardEntry iconSrc="/date.svg" label={generateScheduleText(classObj.schedule)} />
            <ClassCardEntry iconSrc="/number.svg" label={`CRN: ${classObj.crn}`} />
          </div>
        </div>
      </div>

      <div className={styles.DeleteButtonContainer}>
        <button type="button" className={styles.DeleteButton} onClick={() => onDelete(classObj.crn)}>
          <Image src="/trash.svg" width="18" height="18" />
        </button>
      </div>

    </div>
  )
}