import { parse, v4 as uuidv4 } from 'uuid'

import styles from './Project.module.css'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../service/ServiceForm';

function Project() {
  const { id } = useParams()
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');


  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data)
        })
        .catch((err) => console.log(err))
    }, 300)
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  function createService(project) {
    setMessage('')

    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // Validação do valor máximo
    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço.');
      setType('error')
      project.services.pop();
      return;
    }

    // Adicionar o custo do serviço ao custo total do projeto
    project.cost = newCost

    // Atualizar o projeto
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch(err => console.log(err))
  }

  function editPost(project) {
    setMessage('')
    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor do que o custo do projeto!');
      setType('error');
      return
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setShowProjectForm(false)
        setMessage('Projeto atualizado com sucesso!')
        setType('success')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      {project.name ? (
        <div className={styles.projectDetails}>
          <Container customClass='column'>
            <Message msg={message} type={type} />
            <div className={styles.detailsContainer}>
              <h1>Projeto: {project.name}</h1>
              <button onClick={toggleProjectForm} className={styles.btn}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.projectInfo}>
                  <p>
                    <span>Categoria:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Orçamento total:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.projectInfo}>
                  <ProjectForm handleSubmit={editPost} btnText='Concluir Edição' projectData={project} />
                </div>
              )}
            </div>
            <div className={styles.serviceFormContainer}>
              <h2>Adicione um serviço</h2>
              <button onClick={toggleServiceForm} className={styles.btn}>
                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
              </button>
              <div className={styles.projectInfo}>
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText='Adicionar serviço'
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços:</h2>
            <Container customClass='start'>
              <p>Ainda não foram adicionados serviços.</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project