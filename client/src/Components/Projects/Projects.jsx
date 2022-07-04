import "./Projects.css";
import Project from "./Project";
import { Projects as projectData } from "../../Data/Static/Projects";

function Projects() {
  return (
    <div className="projectHome container">
      <h2>Projects</h2>
      <div className="projectHome__container">
        {projectData?.map((project, index) => {
          if (index < 2) {
            return (
              <Project
                key={index}
                image={project.imageURI}
                title={project.ProjectTitle}
                description={project.ProjectSummary}
              />
            );
          }else{
            return;
          }
        })}
      </div>
      <button>See all</button>
    </div>
  );
}


export default Projects;
