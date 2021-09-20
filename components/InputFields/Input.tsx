import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import styles from '../../styles/Styles.module.scss'

type InputType = {
  name: string;
  label: string;
   [x:string]: any;
}

const Input:React.FC<InputType> = props =>  {
  const inputRef = useRef()
  const {name, label, ...rest} = props;
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </>
  )
}

export default Input
