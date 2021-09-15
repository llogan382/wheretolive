import { useRef } from "react";
import styles from "../../styles/Styles.module.scss";
import { Form } from "@unform/web";
import Checkbox from "../InputFields/Checkbox";
import { useFormData } from "../../context";

import * as yup from "yup";

const schema = yup.object().shape({
  checkbox: yup.bool().oneOf([true], "Checkbox is required"),
});

export default function Social({ formStep, nextFormStep }: any) {
  const { setFormValues }: any = useFormData();
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
// TODO: fix spelling errors
  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>What social characteristics matter to you?</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <Checkbox name="DP02_0153PE" label="Households with high-speed internet" value=""/>

          <Checkbox name="DP02_0002PE" label="More Households with MARRIED couples" value=""/>
          <Checkbox name="DP02_0004PE" label="More Households with NON-MARRIED couples" value=""/>
          <Checkbox name="DP02_0017E" label="Largest family size" value=""/>
          <Checkbox name="DP02_0029PE" label="More widowed males" value=""/>
          <Checkbox name="DP02_0030PE" label="More divorced males" value=""/>
          <Checkbox name="DP02_0026PE" label="More males who have never been marries" value=""/>
          <Checkbox name="DP02_0035PE" label="More widowed females" value=""/>
          <Checkbox name="DP02_0036PE" label="More divorced females" value=""/>
          <Checkbox name="DP02_0032PE" label="More females who have never been married" value=""/>
          <Checkbox name="DP02_0040E" label="More babies born in the past 12 months" value=""/>
          <Checkbox name="DP02_0066PE" label="Education: college, Masters degree or higher" value=""/>
          <Checkbox name="DP02_0093PE" label="More people born in foreign countries" value=""/>

        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
