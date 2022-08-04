import { Link } from 'react-router-dom'

const Project = ({ url, title }) => {
  return (
    <div className='project'>
      <img src={url} alt='projects' />
      <Link to='/projects'>
        <p>{title}</p>
      </Link>
    </div>
  )
}

export default Project
