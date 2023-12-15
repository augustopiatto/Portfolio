import Carrousel from "../UIComponents/Carousel/Carousel";
import { projects } from "../../infos";
import { Project } from "../../helpers/types/types";

function Projects() {
  const headers = projects.reduce((acc, project) => {
    acc[project.id - 1] = project.name;
    return acc;
  }, {} as { [key: number]: string });
  const data = projects.reduce((acc, project) => {
    acc[project.id - 1] = {
      description: project.description,
      technologies: project.technologies,
    };
    return acc;
  }, {} as { [key: number]: { description: string; technologies: string[] } });

  return (
    <div className="mx-auto">
      {projects && !!projects.length && (
        <Carrousel headers={headers} data={data} stepper={true}>
          {projects.map((project: Project) => (
            <div key={project.id}>
              <img
                src={project.img}
                alt={project.name}
                className="max-w-full h-full"
              />
            </div>
          ))}
        </Carrousel>
      )}
    </div>
  );
}

export default Projects;
