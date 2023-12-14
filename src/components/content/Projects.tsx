import Tag from "../UIComponents/Tag";
import Carrousel from "../HTMLComponents/Carousel";
import { projects } from "../../infos";
import { Project } from "../../helpers/types/types";

function Projects() {
  return (
    <div className="mx-auto">
      {projects && !!projects.length && (
        <Carrousel>
          {projects.map((project: Project) => (
            <div key={project.id} className="">
              <h1 className="font-bebas text-3xl text-title">{project.name}</h1>
              <img
                src={project.img}
                alt={project.name}
                className="max-w-full max-h-[400px] my-5"
              />
              <div className="w-full flex items-center mb-5 gap-5 pl-10">
                <h2 className="font-bebas text-xl text-title">Descrição</h2>
                <p className="font-chivo text-m text-paragraph">
                  {project.description}
                </p>
              </div>
              <div className="w-full flex items-center gap-5 pl-10">
                <h2 className="font-bebas text-xl text-title">Tecnologias</h2>
                <div className="flex gap-5">
                  {project.technologies.map((tag) => (
                    <Tag text={tag} key={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carrousel>
      )}
    </div>
  );
}

export default Projects;
