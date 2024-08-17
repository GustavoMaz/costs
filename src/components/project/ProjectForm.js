import {useEffect, useState} from 'react'

import FormInput from "../form/FormInput"
import FormSelect from "../form/FormSelect"
import FormSubmitButton from "../form/FormSubmitButton"

function ProjectForm({ btnText }) {

  const [categories, setCategories] = useState([]);

  // Evita que o request seja feito a todo momento buscando mudanças nos dados
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((resp) => resp.json()) // Transformando a resposta em json
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  
  }, [])

  return (
    <form>
      <FormInput 
        type="text"
        name="name"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
      />
      <FormInput 
        type="number"
        name="budget"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
      />
      <FormSelect 
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <FormSubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm