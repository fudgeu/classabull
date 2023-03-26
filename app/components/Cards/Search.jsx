import { Inter } from 'next/font/google'
import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"
import TextSM from '../Text/TextSM'
import SearchByButton from '../Search/SearchByButton'

const inter = Inter({ subsets: ['latin'] })

export default function Search() {
  return (
    <div className={styles.CardBackground}>
      <div className={styles.SearchCard}>
        <TextLG>Find your class</TextLG>
        <div className={styles.SeachByContainer}>
          <SearchByButton selected onSelect={() => {}} labelS="Course ID" />
          <TextSM>Title</TextSM>
          <TextSM>Instructor</TextSM>
          <TextSM>Tag</TextSM>
        </div>
        <div className={`${inter.className} ${styles.SearchTextboxContainer}`}>
          <input type="text" className={`${styles.ClassSubjTextbox}`} placeholder="EGN"></input>
          <input type="text" className={`${styles.ClassNumberTextbox}`} placeholder="3000"></input>
        </div>
      </div>
    </div>
  )
}

