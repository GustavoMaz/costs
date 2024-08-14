function ProjectForm() {
  return (
    <form>
      <div>
        <label htmlFor="projectName">Nome do projeto:</label>
        <input type="text" id="projectName" name="projectName" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <label htmlFor="budget">Orçamento:</label>
        <input type="number" id="budget" name="budget" placeholder="Insira o orçamento do projeto" />
      </div>
      <div>
        <select name="categoryId">
          <option selected disabled>Selecione a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  )
}

export default ProjectForm