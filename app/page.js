'use client'

import { Caveat, Comfortaa, Inconsolata, Inter, Varela_Round } from 'next/font/google'
import styles from './page.module.css'
import Search from './components/Cards/Search'
import List from './components/Cards/List'
import { useState } from 'react'
import Schedule from './components/Schedule/Schedule'

export const revalidate = 1

const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })

export default function Home() {
  
  const [addedClasses, setAddedClasses] = useState([])

  const onAdd = (crn) => {
    if (addedClasses.includes(crn)) return;
    setAddedClasses([...addedClasses, crn])
  }

  const onDelete = (crn) => {
    const newValues = addedClasses.filter(c => {
      if (c === crn) return false;
      return true;
    });

    setAddedClasses(newValues)
  }

  return (
    <main className={styles.Main}>
      <div className={styles.Navbar}>
        <h1 className={caveat.className} style={{fontSize:"38px"}}>Classabull</h1>
      </div>
      <div className={styles.Content}>

        <Search onAdd={onAdd} />

        <div className={styles.Schedule}>
          <Schedule addedClasses={addedClasses} />
        </div>

        <List addedClasses={addedClasses} onDelete={onDelete} />

      </div>
    </main>
  )
}
