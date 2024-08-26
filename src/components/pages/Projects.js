import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from "../layout/Message"
import Container from "../layout/Container"
import Loading from "../layout/Loading"
import LinkButton from "../layout/LinkButton"
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err)
        )
    }, 300)
  }, []);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Novo projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              category={project.category.name}
              budget={project.budget}
              key={project.id}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>não há projetos ainda</p>
        )}
      </Container>
    </div>
  )
}

export default Projects