import Carrousel from "../UIComponents/Carousel/Carousel";
import { projects } from "../../infos";
import { Project } from "../../helpers/types/types";

function Projects() {
  const headers = projects.map((project) => project.name);
  const data = projects.map((project) => {
    return {
      description: project.description,
      technologies: project.technologies,
    };
  });

  return (
    <div className="mx-auto">
      {projects && !!projects.length && (
        <Carrousel headers={headers} data={data} stepper={true}>
          {projects.map((project: Project) => (
            <div key={project.id}>
              <img
                src={project.img}
                alt={project.name}
                className="max-w-full max-h-[400px] my-5"
              />
            </div>
          ))}
        </Carrousel>
      )}
    </div>
  );
}

export default Projects;
