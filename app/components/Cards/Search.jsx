'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"
import SearchByButton from '../Search/SearchByButton/SearchByButton'
import SearchResult from '../Search/SearchResult/SearchResult'
import TextM from '../Text/TextM'

const inter = Inter({ subsets: ['latin'] })

async function getClassByID(subject, number) {
  return await fetch(`http://localhost:3000/api/getClassByID?subj=${subject}&num=${number}`)
  .then(response => response.json())
}

async function getClassByTitle(title) {
  return await fetch(`http://localhost:3000/api/getClassByTitle?title=${title}`)
  .then(response => response.json())
}

export default function Search({ onAdd }) {
  const [results, setResults] = useState({})
  const [searchBy, setSearchBy] = useState('CourseID')
  const [courseSubject, setCourseSubject] = useState('')
  const [courseNum, setCourseNum] = useState('')
  const [courseTitle, setCourseTitle] = useState('')

  const [selectedClass, setSelectedClass] = useState('')

  useEffect(() => {
    async function fetchData() {
      let rawResults;
      switch (searchBy) {
        case "CourseID":
          rawResults = await getClassByID(courseSubject, courseNum);
          break;
        
        case "Title":
          rawResults = await getClassByTitle(courseTitle);
          break;
      }
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
  }, [courseSubject, courseNum, courseTitle])

  const handleSubjectChange = (event) => {
    setCourseSubject(event.target.value)
  }

  const handleNumberChange = (event) => {
    setCourseNum(event.target.value)
  }

  const handleTitleChange = (event) => {
    setCourseTitle(event.target.value)
  }

  const handleSearchResultClick = (title) => {
    if (title === selectedClass) {
      setSelectedClass('')
      return;
    }
    setSelectedClass(title)
  }

  const renderSearch = () => {
    switch (searchBy) {
      case "CourseID":
        return (
          <div className={`${inter.className} ${styles.SearchTextboxContainer}`}>
            <input
              key="subjectBox"
              type="text" 
              className={`${styles.ClassSubjTextbox}`}
              onChange={handleSubjectChange}
              placeholder="EGN"
            />
            <input 
              key="numberBox"
              type="text" 
              className={`${styles.ClassNumberTextbox}`}
              onChange={handleNumberChange}
              placeholder="3000" />
          </div>
        )
        break;

        case "Title":
          return (
            <div className={`${inter.className} ${styles.SearchTextboxContainer}`}>
              <input 
                key="titleBox"
                type="text" 
                className={`${styles.ClassNumberTextbox}`}
                onChange={handleTitleChange}
                placeholder="Programming Concepts" />
            </div>
          )
          break;
    }
  }

  const renderResults = () => {
    if (Object.keys(results).length === 0) {
      return (
        <div className={styles.ListNoClassesContainer}>
          <TextM><i>No classes found</i></TextM>
        </div>
      )
    }

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
          onAdd={onAdd}
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
        </div>

        {renderSearch()}


        <div className={styles.ResultsContainer}>
          {renderResults()}
        </div>

      </div>
    </div>
  )
}

