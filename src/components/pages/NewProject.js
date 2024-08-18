import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

  const navigate = useNavigate();

  function createPost(project) {

    // inicializar custo e serviços
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate('/projects', {message: 'Projeto criado com sucesso!'})
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
    </div>
  )
}

export default NewProject