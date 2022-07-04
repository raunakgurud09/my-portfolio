import './Projects.css'
import Project from './Project'

function Projects() {
  return (
    <div className='projectHome container'>
      <h2>Projects</h2>
      <div className="projectHome__container">
        <Project />
        <Project />
        <div className="projectHome__card">

        </div>
      </div>
      <button>See all</button>
    </div>
  )
}

export default Projects