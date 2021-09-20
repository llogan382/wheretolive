import { useEffect, useState } from 'react'

export const MostPopulated = (jsonResponse: { [x: string]: any; jsonResponse?: any }) => {
  const { ...data } = jsonResponse
  const [results, setResults] = useState([])
  useEffect(() => {
    // const updatedResults = [];
    setResults(data.jsonResponse)
  }, [jsonResponse])

  const [asArray] = [jsonResponse.jsonResponse]
  // console.log(asArray[2]);
  const oneThird = Math.floor(asArray.length / 3)

  // // Sort according to POPULATION:
  var popSize = asArray.slice().sort(function (a: any[], b: any[]) {
    return Number(b[1]) - Number(a[1])
  })
  var topThirdSorted = popSize.slice(1, oneThird)
  // Sort according to match
  const result = topThirdSorted.slice().sort(function (a: any[], b: any[]) {
    return Number(b[2]) - Number(a[2])
  })

  return (
    <div>
      Here are the top results for LARGEST populated counties:
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
