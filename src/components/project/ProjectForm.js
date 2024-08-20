import { useEffect, useState } from 'react'

import FormInput from "../form/FormInput"
import FormSelect from "../form/FormSelect"
import FormSubmitButton from "../form/FormSubmitButton"

function ProjectForm({ btnText, handleSubmit, projectData }) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {})

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

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  }

  function handleChange(e) {
    // 1. cria uma cópia rasa do objeto project
    // 2. avalia o atributo name do input para definir qual propriedade do objeto está sendo alterada
    // 3. atribui o valor do input para a propriedade correspondente do objeto
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project, 
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    });
  }

  return (
    <form onSubmit={submit}>
      <FormInput
        type="text"
        name="name"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <FormInput
        type="number"
        name="budget"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <FormSelect
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <FormSubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm