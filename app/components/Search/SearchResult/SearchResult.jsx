import Image from 'next/image'
import ClassCard from '../../ClassClard/ClassCard'
import TextLG from '../../Text/TextLG'
import TextSM from '../../Text/TextSM'
import styles from './styles.module.css'

export default function SearchResult({id, title, amount, selected, allClasses, onClick}) {

  const renderAllClasses = () => {
    if (!selected) return []

    return allClasses.map(c => {
      return <ClassCard classObj={c} />
    });

  }

  return (
    <div className={styles.SearchResultContainer} onClick={onClick}>
      <div className={styles.SearchResult}>

        <div className={styles.SearchResultInfo}>
          <TextLG>{id}</TextLG>
          <TextSM>{title}</TextSM>
        </div>
        <div className={styles.SearchResultChevron}>
          <div className={styles.SearchResultAmountContainer}>
            <TextSM>{amount}</TextSM>
          </div>
          <Image src="/arrowRight.svg" width="25" height="25" />
        </div>  
      </div>

      <div className={styles.SearchResultClassList}>
        {renderAllClasses()}
      </div>

    </div>
  )
}