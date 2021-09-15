import styles from '../styles/Styles.module.scss'

export default function FormCard({ children, currentStep, prevFormStep }) {
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
