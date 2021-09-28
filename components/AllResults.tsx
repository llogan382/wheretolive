import { useEffect, useState } from 'react'
import styles from '../styles/Styles.module.scss'

export const AllResults = (jsonResponse) => {
  const { ...data } = jsonResponse

  const [results, setResults] = useState([])

  useEffect(() => {
    setResults(data.jsonResponse)
  }, [jsonResponse])

  const result = results.slice().sort(function (a, b) {
    return b[2] - a[2];
  })
  // console.log(result)
  return (
    <div className={styles.resultsTitle}>

      Here are the COMBINED top results:
      <ol>
        {Object.values(result)
          .slice(1, 11)
          .map((item) => (
            <li key={item[3]+item[4]}>
              {item[0]}: {item[2].toString()}%; population: {item[1]}
            </li>
          ))}
      </ol>
    </div>
  )
}
