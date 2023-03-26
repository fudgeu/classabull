import styles from "./styles.module.css"
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function TextSM({ children }) {
    return (
        <p className={`${styles.TextSM} ${inter.className}`} >{children}</p>
    )
}