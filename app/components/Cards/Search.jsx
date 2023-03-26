'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"
import SearchByButton from '../Search/SearchByButton/SearchByButton'
import SearchResult from '../Search/SearchResult/SearchResult'

const inter = Inter({ subsets: ['latin'] })

async function getClassbyID(subject, number) {
  return await fetch(`http://localhost:3000/api/getClassByID?subj=${subject}&num=${number}`)
  .then(response => response.json())
}

export default function Search() {
  const [results, setResults] = useState({})
  const [searchBy, setSearchBy] = useState('CourseID')
  const [courseSubject, setCourseSubject] = useState('COP')
  const [courseNum, setCourseNum] = useState('')

  const [selectedClass, setSelectedClass] = useState('')

  useEffect(() => {
    async function fetchData() {
      const rawResults = await getClassbyID(courseSubject, courseNum);
      const newResults = {}
      rawResults.forEach(r => {
        if (!(r.title in newResults)) {
            newResults[r.title] = []
        }
        newResults[r.title].push(r)
      })
      setResults(newResults)
    }
    fetchData();
  }, [courseSubject, courseNum])

  const handleSubjectChange = (event) => {
    setCourseSubject(event.target.value)
  }

  const handleNumberChange = (event) => {
    setCourseNum(event.target.value)
  }

  const handleSearchResultClick = (title) => {
    if (title === selectedClass) {
      setSelectedClass('')
      return;
    }
    setSelectedClass(title)
  }

  const renderResults = () => {
    return Object.keys(results).map(key => {
      const result = results[key]
      console.log(key)
      console.log(result)
      return (
        <SearchResult 
          id={`${result[0].subject} ${result[0].courseNumber}`} 
          title={key} amount={result.length} 
          allClasses={result} 
          onClick={() => handleSearchResultClick(key)}
          selected={selectedClass === key}
        />
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

