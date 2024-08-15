import styles from './FormSubmitButton.module.css'

function FormSubmitButton({ text, name, }) {
  return (
    <div>
      <input className={styles.btn} type='Submit' name={name} id={name} value={text} />
    </div>
  )
}

export default FormSubmitButton