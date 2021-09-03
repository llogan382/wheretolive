import { useRef } from "react";
import styles from "../../styles/Styles.module.scss";
import { Form } from "@unform/web";
import Checkbox from "../InputFields/Checkbox";
import { useFormData } from "../../context";

import * as yup from "yup";

const schema = yup.object().shape({
  checkbox: yup.bool().oneOf([true], "Checkbox is required"),
});

export default function MoreInfo({ formStep, nextFormStep }) {
  // @ts-ignore
  const { setFormValues } = useFormData();
  const formRef: any = useRef();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner);
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Tell us a little more about AGE:</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Checkbox name="20s" label="In their 20s" value="20s"/>
          <Checkbox name="30s" label="In their 30s" value="30s"/>
          <Checkbox name="40s" label="In their 40s" value="40s"/>
          <Checkbox name="50s" label="50+" value="50+"/>
        </div>
        <button onClick={setFormValues}>Next</button>
      </Form>
    </div>
  );
}
