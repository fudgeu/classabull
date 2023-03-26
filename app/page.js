import Image from 'next/image'
import { Caveat, Comfortaa, Inconsolata, Inter, Varela_Round } from 'next/font/google'
import styles from './page.module.css'
import Search from './components/Cards/Search'
import List from './components/Cards/List'

export const revalidate = 1

const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })

async function test() {
  console.log("testtttt")
  await fetch("http://localhost:3000/api/getClassByID?subj=C")
    .then(response => response.text())
    .then(data => {})
}

export default async function Home() {
  await test();
  return (
    <main className={styles.Main}>
      <div className={styles.Navbar}>
        <h1 className={caveat.className}>Classabull</h1>
      </div>
      <div className={styles.Content}>

        <Search />

        <div className={styles.Schedule}></div>

        <List />

      </div>
    </main>
  )
}
