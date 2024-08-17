import styles from './FormSelect.module.css'

function FormSelect({ text, options, name, placeholder, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} placeholder={placeholder}>
        <option selected disabled hidden>Selecione a categoria</option>
        {
          options.map((option) => (
            <option value={option.id} key={option.id}>{option.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default FormSelect