import styles from '../styles/Styles.module.scss'

type FormCardType = {
  children: any;
  currentStep: number;
  prevFormStep: () => void;
}

const FormCard:React.FC<FormCardType> = props => {

  const {children, currentStep, prevFormStep } = props;

  return (
    <div className={styles.formCard}>
      {currentStep < 3 && (
        <>
          <span className={styles.steps}>Step {currentStep + 1} of 3</span>
        </>
      )}
      {children}
      {currentStep > 0 && (
        <button className={styles.back} onClick={prevFormStep} type="button">
          back
        </button>
      )}
    </div>
  )
}

export default FormCard;
