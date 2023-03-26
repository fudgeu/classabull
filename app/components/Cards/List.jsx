import styles from "./styles.module.css"
import TextLG from "../Text/TextLG"
import TextM from "../Text/TextM"
import { useEffect, useState } from "react"
import AddedClass from "../List/AddedClass"

async function getClassesByCRNs(crns) {
  console.log(crns)
  let classes = []
  for (var crnIndex in crns) {
    let crn = crns[crnIndex]
    let classObj = await fetch(`http://localhost:3000/api/getClassByCRN?crn=${crn}`)
      .then(response => response.json())
    classes.push(classObj)
  }
  return classes
}

export default function List({ addedClasses }) {

  const [ classes, setClasses ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const rawResults = await getClassesByCRNs(addedClasses);
      setClasses(rawResults)
    }
    fetchData();
  }, [addedClasses])

  const renderClasses = () => {
    return classes.map(classObj => {
      return <AddedClass classObj={classObj} />
    })
  }

  return (
    <div className={styles.CardBackground}>
      <div className={styles.SearchCard}>
        <TextLG>Your classes</TextLG>

        <div className={styles.ResultsContainer}>
          {renderClasses()}
        </div>
      </div>
    </div>
  )
}