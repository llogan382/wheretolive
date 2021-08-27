import { useRef } from "react";
import styles from "../../styles/styles.module.scss";
import { Form } from "@unform/web";
import Checkbox from "../InputFields/Checkbox";
import { useFormData } from "../../context";

import * as yup from "yup";

const schema = yup.object().shape({
  checkbox: yup.bool().oneOf([true], "Checkbox is required"),
});

export default function Area({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef();

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
    <div className={formStep === 2 ? styles.showForm : styles.hideForm}>
      <h2>How LARGE is your search are?</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Checkbox name="Age" label="State" value=""/>
          <Checkbox name="Age" label="City" value=""/>
          <Checkbox name="Age" label="County" value=""/>
          <Checkbox name="Age" label="Zipcode" value=""/>

        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
