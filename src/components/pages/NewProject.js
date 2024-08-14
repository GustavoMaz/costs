import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços</p>
      <ProjectForm />
    </div>
  )
} 

export default NewProject