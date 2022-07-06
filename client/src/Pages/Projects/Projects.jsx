import { Footer, Navigation } from "../../Components/exports";
import "./Projects.css";
import { Projects as projectsData } from "../../Data/Static/Projects";


const ProjectCard = (props) => {
  return (
    <div className="project__card">
      <div
        className="card-background"
        style={{ backgroundColor: props.backgroundColor }}
      ></div>
      <div className="project__image-container">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="project__text-container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="projects">
      <Navigation />
      <h2>Projects</h2>

      <div className="projects__container">
        {projectsData?.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.imageURI}
              title={project.ProjectTitle}
              summary={project.ProjectSummary}
              backgroundColor={project.backgroundColor}
              description={project.ProjectDescription}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
