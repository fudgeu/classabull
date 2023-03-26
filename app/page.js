'use client'

import { Caveat, Comfortaa, Inconsolata, Inter, Varela_Round } from 'next/font/google'
import styles from './page.module.css'
import Search from './components/Cards/Search'
import List from './components/Cards/List'
import { useState } from 'react'

export const revalidate = 1

const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })

export default function Home() {
  
  const [addedClasses, setAddedClasses] = useState([])

  const onAdd = (crn) => {
    console.log("----------------------------> " + addedClasses)
    if (addedClasses.includes(crn)) return;
    setAddedClasses([...addedClasses, crn])
  }

  return (
    <main className={styles.Main}>
      <div className={styles.Navbar}>
        <h1 className={caveat.className}>Classabull</h1>
      </div>
      <div className={styles.Content}>

        <Search onAdd={onAdd} />

        <div className={styles.Schedule}></div>

        <List addedClasses={addedClasses}/>

      </div>
    </main>
  )
}
