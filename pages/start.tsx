import { useState, useRef } from "react";
import Head from "next/head";

import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";
import {
  Interests, MoreInfo, Area
} from "../components/Forms";
import FormCompleted from "../components/FormCompleted";

const App = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Unform Multi Step Form</title>
      </Head>
      <h1>Unform Multi Step Form</h1>

      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <Interests formStep={formStep} nextFormStep={nextFormStep} />

        )}
        {formStep >= 1 && (
          <MoreInfo formStep={formStep} nextFormStep={nextFormStep} />

        )}
                {formStep >= 2 && (
          <Area formStep={formStep} nextFormStep={nextFormStep} />

        )}

        {formStep >= 3 && <FormCompleted />}
      </FormCard>



    </div>
  );
};

export default App;
