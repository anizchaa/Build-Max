import ProjectData from '../data/ProjectData'
import Project from './Project'

const Projects = () => {
  const projects = ProjectData

  return (
    <>
      <h3>Our Latest Projects</h3>
      <div className='projects' data-aos='fade-up'>
        {projects.map((project) => {
          return (
            <Project key={project.id} title={project.title} url={project.url} />
          )
        })}
      </div>
    </>
  )
}

export default Projects
