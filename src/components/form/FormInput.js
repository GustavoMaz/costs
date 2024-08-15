import styles from './FormInput.module.css'

function FormInput({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}:</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  )
}

export default FormInput