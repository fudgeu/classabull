import Image from 'next/image'
import { Caveat, Comfortaa, Inconsolata, Inter, Varela_Round } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <h1 className={caveat.className}>Classabull</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.search} />
        <div className={styles.schedule}></div>
        <div className={styles.list}></div>
      </div>
    </main>
  )
}
