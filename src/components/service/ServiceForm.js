import { useState } from 'react'

import FormInput from '../form/FormInput'
import FormSubmitButton from '../form/FormSubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {

  const [service, setService] = useState({})
  
  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }
  function handleChange(e) {
    setService({...service, [e.target.name]: e.target.value});
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <FormInput 
        type='text'
        text='Nome do serviço'
        name='name'
        placeholder='Insira o nome do serviço'
        handleOnChange={handleChange}
      />
      <FormInput 
        type='text'
        text='Custo do serviço'
        name='cost'
        placeholder='Insira o valor do serviço'
        handleOnChange={handleChange}
      />
      <FormInput 
        type='text'
        text='Descrição do serviço'
        name='description'
        placeholder='Descreva o serviço'
        handleOnChange={handleChange}
      />
      <FormSubmitButton text={btnText} />
    </form>
  )
}

export default ServiceForm