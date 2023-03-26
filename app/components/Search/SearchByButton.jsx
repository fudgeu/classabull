import styles from './styles.module.css'
import { clsx } from 'clsx';
import TextSM from '../Text/TextSM';

export default function SearchByButton(selected, onSelect, label) {

    console.log(`test: ${label}`)
    return (
        <div className={clsx({
            [styles.SearchByButton]: true,
            [styles.SearchByButtonSelected]: selected
        })}>
            <TextSM>{label}</TextSM>
        </div>
    )
}