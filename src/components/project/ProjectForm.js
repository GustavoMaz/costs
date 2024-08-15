import FormInput from "../form/FormInput"
import FormSelect from "../form/FormSelect"
import FormSubmitButton from "../form/FormSubmitButton"

function ProjectForm({ btnText }) {
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
        name="category"
        text="Selecione a categoria"
        options={['Infraestrutura', 'Desenvolvimento', 'Operações']}
      />
      <FormSubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm