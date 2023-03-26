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
  const [courseNum, setCourseNum] = useState('')

  useEffect(() => {
    async function fetchData() {
      const rawResults = await getClassbyID(courseSubject, courseNum);
      const newResults = {}
      rawResults.forEach(r => {
        newResults[r.title].push(r)
      })
    }
    fetchData();
  }, [courseSubject, courseNum])

  const handleSubjectChange = (event) => {
    setCourseSubject(event.target.value)
  }

  const handleNumberChange = (event) => {
    setCourseNum(event.target.value)
  }

  const renderResults = () => {
    return results.map(r => {
      return (
        <SearchResult id={`${r.subject} ${r.courseNumber}`} title={r.title} amount="2" />
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
          <input 
            type="text" 
            className={`${styles.ClassSubjTextbox}`}
            onChange={handleSubjectChange}
            placeholder="EGN"
          />
          <input 
            type="text" 
            className={`${styles.ClassNumberTextbox}`}
            onChange={handleNumberChange}
            placeholder="3000" />
        </div>

        <div className={styles.ResultsContainer}>
          {renderResults()}
        </div>

      </div>
    </div>
  )
}

