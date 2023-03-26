import styles from "./styles.module.css"
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function TextLG({ children }) {
    return (
        <p className={`${styles.TextLG} ${inter.className}`} >{children}</p>
    )
}