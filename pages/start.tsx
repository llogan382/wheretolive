import { useState, useRef } from 'react'
import Head from 'next/head'
import Data from '../components/getdata'
import styles from '../styles/Styles.module.scss'
import FormCard from '../components/FormCard'
import { Social, MoreInfo, Area } from '../components/Forms'
import FormCompleted from '../components/FormCompleted'
import Interests from '../components/Forms/Interests'

const App = () => {
  const [formStep, setFormStep] = useState(0)

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1)

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1)
// TODO: Add pages to explain more about the site.
  return (
    <div className={styles.container}>
      <Head>
        <title>Where should I move now</title>
      </Head>
      <h1>The magic, moving form</h1>
      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <Social formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <MoreInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <Interests formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep >= 3 && <FormCompleted />}
      </FormCard>
    </div>
  )
}

export default App
