'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"
import TextSM from '../Text/TextSM'
import SearchByButton from '../Search/SearchByButton/SearchByButton'
import SearchResult from '../Search/SearchResult/SearchResult'

const inter = Inter({ subsets: ['latin'] })

async function getClassbyID(subject, number) {
  return await fetch(`http://localhost:3000/api/getClassByID?subj=${subject}&num=${number}`)
  .then(response => response.json())
}

export default function Search() {
  const [results, setResults] = useState([])
  const [searchBy, setSearchBy] = useState('CourseID')
  const [courseSubject, setCourseSubject] = useState('COP')
  const [courseNum, setCourseNum] = useState('2030')

  useEffect(() => {
    async function fetchData() {
      setResults(await getClassbyID(courseSubject, courseNum))
    }
    fetchData();
  }, [courseSubject])

  const handleSubjectChange = (event) => {
    setCourseSubject(event.target.value)
  }

  const renderResults = () => {
    console.log(results)
    return results.map(r => {
      return (
        <SearchResult id={r.subject} title={r.title} amount="2" />
      )
    })
  }

  return (
    <div className={styles.CardBackground}>
      <div className={styles.SearchCard}>
        <TextLG>Find your class</TextLG>
        <div className={styles.SeachByContainer}>
          <SearchByButton 
            selected={searchBy === 'CourseID'}
            onSelect={() => setSearchBy("CourseID")}
            label="Course ID" 
          />
          <SearchByButton 
            selected={searchBy === 'Title'}
            onSelect={() => setSearchBy("Title")}
            label="Title" 
          />
          <SearchByButton 
            selected={searchBy === 'Tag'}
            onSelect={() => setSearchBy("Tag")}
            label="Tag" 
          />
        </div>
        <div className={`${inter.className} ${styles.SearchTextboxContainer}`}>
          <input type="text" className={`${styles.ClassSubjTextbox}`} placeholder="EGN"></input>
          <input type="text" className={`${styles.ClassNumberTextbox}`} placeholder="3000"></input>
        </div>

        {renderResults()}

      </div>
    </div>
  )
}

