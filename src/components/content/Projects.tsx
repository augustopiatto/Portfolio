import Carousel from "../UIComponents/Carousel/Carousel";
import { projects } from "../../helpers/infos";

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
  const images = projects.map((project) => {
    return { id: project.id, name: project.name, src: project.img };
  });

  return (
    <div id="projects" className="mx-auto">
      {projects && !!projects.length && (
        <Carousel headers={headers} data={data} images={images}></Carousel>
      )}
    </div>
  );
}

export default Projects;
