import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { useFormData } from '../../context'
import styles from '../../styles/Styles.module.scss'

type CheckboxType = {
  name: string;
  value: string;
  label: string;
   [x:string]: any;

}

const Checkbox:React.FC<CheckboxType> = props =>  {
  const inputRef = useRef()
  const {name, value, label, ...rest} = props;
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.checked
      },
      clearValue: (ref) => {
        ref.current.checked = defaultChecked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <div>
      <label htmlFor={fieldName} key={fieldName}>
        <input
          defaultChecked={defaultChecked}
          ref={inputRef}
          type="checkbox"
          id={fieldName}
          {...rest}
        />
        {label}
      </label>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  )
}

export default Checkbox
