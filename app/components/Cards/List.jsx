import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"
import TextM from "../Text/TextM"

export default function List({ addedClasses }) {
  return (
    <div className={styles.CardBackground}>
      <div className={styles.SearchCard}>
        <TextLG>Your classes</TextLG>

        {addedClasses.map(c => {return (<TextM>{c}</TextM>)})}
      </div>
    </div>
  )
}