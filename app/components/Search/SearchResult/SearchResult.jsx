import Image from 'next/image'
import ClassCard from '../../ClassCard/ClassCard'
import TextLG from '../../Text/TextLG'
import TextSM from '../../Text/TextSM'
import styles from './styles.module.css'
import { clsx } from 'clsx';

export default function SearchResult({id, title, amount, selected, allClasses, onClick, onAdd}) {

  const renderAllClasses = () => {
    if (!selected) return []

    return allClasses.map(c => {
      return <ClassCard classObj={c} onAdd={onAdd} />
    });

  }

  return (
    <div className={styles.SearchResultContainer}>
      <div className={styles.SearchResult} onClick={onClick}>

        <div className={styles.SearchResultInfo}>
          <TextLG>{id}</TextLG>
          <TextSM>{title}</TextSM>
        </div>
        <div className={styles.SearchResultChevron}>
          <div className={styles.SearchResultAmountContainer}>
            <TextSM>{amount}</TextSM>
          </div>
          <Image src="/arrowRight.svg" width="25" height="25" className={clsx({ [styles.SearchResultChevronRotated]: selected})} />
        </div>  
      </div>

      <div className={styles.SearchResultClassList}>
        {renderAllClasses()}
      </div>

    </div>
  )
}