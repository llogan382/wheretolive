import { useEffect, useState } from 'react'

export const LeastPopulated = (jsonResponse) => {
  const { ...data } = jsonResponse
  const [results, setResults] = useState([])
  useEffect(() => {
    // const updatedResults = [];
    setResults(data.jsonResponse)
  }, [jsonResponse])

  // TODO: Add prettier
  const [asArray] = [jsonResponse.jsonResponse]
  const oneThird = Math.floor(asArray.length / 3)

  // // Sort according to POPULATION:
  var popSize = asArray.slice().sort(function (a, b) {
    return Number(b[1]) - Number(a[1])
  })
  var topThirdSorted = popSize.slice(oneThird * 2, asArray.length)
  // Sort according to match
  const result = topThirdSorted.slice().sort(function (a, b) {
    return Number(b[2]) - Number(a[2])
  })

  return (
    <div>
      Here are the top results for SMALLEST-SIZED counties:
      <ol>
        {Object.values(result)
          .slice(1, 4)
          .map((item) => (
            <li key={item[1] - item[2]}>
              {item[0]}: {item[2]}%; population: {item[1]}
            </li>
          ))}
      </ol>
    </div>
  )
}
