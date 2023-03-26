import styles from './styles.module.css'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function TextM({ children }) {
    return (
        <p className={`${styles.TextM} ${inter.className}`} >{children}</p>
    )
}