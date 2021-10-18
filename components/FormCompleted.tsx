import React from 'react';
import { useFormData } from '../context'
import Data from './getdata'
import styles from '../styles/Styles.module.scss'

export default function FormCompleted() {
  // @ts-ignore
  const { data } = useFormData()
  const identifiers = Object.keys(data)
  const active = identifiers.filter(function (id) {
    return data[id]
  })
  return (
    <div className={styles.results}>
      {/* {console.log('Here is the active data', active)} */}
      <h2>Let&#39;s find the best places to move... 🎉</h2>
      <Data searchVars={active} />
    </div>
  )
}
