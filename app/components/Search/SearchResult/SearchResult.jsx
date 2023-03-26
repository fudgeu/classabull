import TextLG from '../../Text/TextLG'
import TextSM from '../../Text/TextSM'
import styles from './styles.module.css'

export default function SearchResult({id, title, amount}) {
  return (
    <div className={styles.SearchResult}>
       <TextLG>{id}</TextLG>
       <TextSM>{title}</TextSM>     
    </div>
  )
}