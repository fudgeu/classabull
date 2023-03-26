import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"

export default function List() {
  return (
    <div className={styles.CardBackground}>
      <div className={styles.SearchCard}>
        <TextLG>Your classes</TextLG>
      </div>
    </div>
  )
}