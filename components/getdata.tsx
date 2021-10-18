import { useEffect, useState } from 'react'
import { array } from 'yup/lib/locale'
import { AllResults } from './AllResults'
import { MostPopulated } from './MostPopulated'
import { MiddlePopulations } from './MiddlePopulations'
import { LeastPopulated } from './LeastPopulated'
import styles from '../../styles/Styles.module.scss'

export default function Data(searchVars: any): any {
  const [advice, setAdvice]: any = useState([])

  const arrToInsert = searchVars.searchVars.toString()
  function toPercent(val: string) {
    return Number(parseFloat(val).toFixed(2)) * 100
  }

  function numberWithCommas(x: { toString: () => string }) {
    var parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  useEffect(() => {
    const hostname = `https://api.census.gov/data`
    const year = `2019`
    const datasets = `acs/acs1/profile`
    // B23002B_001E African americans in workforce
    // B08006_017E	Estimate!!Total:!!Worked from home
    const itemToCompare = arrToInsert
    // Get the number of households, and the items to compare. Households is #2 of returned array.
    const variables = `?get=NAME,DP02_0001E,${itemToCompare}`
    const variablePredicates = ``
    const geographies = `&for=county:*&in=state:*`
    const key = `ee638959ae386e00dd646af2980f3da1f171a529`

    const url = `${hostname}/${year}/${datasets}${variables}${geographies}&key=${key}`

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        json.map((item: any[]) => {
          const removeVars = item.length - 4;
          const justVars = item.slice(2, -2).map(Number);
          const weightedAvg = (arr: any[]) => arr.reduce((a: any,b: any) => a + b, 0) / arr.length;
          const showAvg = weightedAvg(justVars).toFixed(2);
          item.splice(2, removeVars, showAvg);
        });
          setAdvice(json)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [arrToInsert])
  return (
    <>
    {console.log('hi there')}
      <AllResults jsonResponse={advice} />

      <MostPopulated jsonResponse={advice} />

      <MiddlePopulations jsonResponse={advice} />

      <LeastPopulated jsonResponse={advice} />
    </>
  )
}
