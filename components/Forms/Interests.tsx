import { useRef } from 'react'
import styles from '../../styles/Styles.module.scss'
import { Form } from '@unform/web'
import Checkbox from '../InputFields/Checkbox'
import { useFormData } from '../../context'

import * as yup from 'yup'

const schema = yup.object().shape({
  checkbox: yup.bool().oneOf([true], 'Checkbox is required'),
})

interface InterestType {
  formStep: number;
  nextFormStep: () => void;
  setFormValues: any;
}

const Interests:React.ReactNode = (props: InterestType) =>  {

  const {formStep, nextFormStep} = props;
  const { setFormValues }:any = useFormData()
  const formRef: any = useRef()

  async function handleSubmit(data: any) {
    try {
      formRef.current.setErrors({})

      await schema.validate(data, {
        abortEarly: false,
      })
      // Validation passed - do something with data
      setFormValues(data)
      nextFormStep()
    } catch (err) {
      const errors = {}
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner)
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.value] = error.message
        })
        formRef.current.setErrors(errors)
      }
    }
  }

  return (
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>What are you interested in?</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Checkbox name="DP04_0088PE" label="Homes over $1 Million" value="" />
          <Checkbox name="DP04_0137PE" label="Lowest Rent" value="" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  )
}

export default Interests;
