import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"

export default function Search() {
  return (
    <div className={styles.CardBackground}>
      <div className={styles.SearchCard}>
        <TextLG>Find your class</TextLG>
        <div className={styles.SearchTextboxContainer}>
          <input type="text" className={styles.ClassSubjTextbox} placeholder="Subj"></input>
          <input type="text" className={styles.ClassNumberTextbox} placeholder="Course Number"></input>
        </div>
      </div>
    </div>
  )
}