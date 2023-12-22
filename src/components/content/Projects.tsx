import Carousel from "../UIComponents/Carousel/Carousel";
import CarouselData from "../UIComponents/Carousel/CarouselData";
import { projects } from "../../helpers/infos";
import React from "react";
import {
  CarouselHeaderInterface,
  CarouselImageInterface,
  ProjectInterface,
} from "../../helpers/interfaces/interfaces";
import Select from "../HTMLComponents/Select";

function Projects() {
  const [carouselIndex, setCarouselIndex] = React.useState<number>(0);
  const [headers, setHeaders] = React.useState<CarouselHeaderInterface[]>([]);
  const [images, setImages] = React.useState<CarouselImageInterface[]>([]);
  const [selectItems, setSelectItems] = React.useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] =
    React.useState<ProjectInterface[]>(projects);

  React.useEffect(() => {
    const headers: CarouselHeaderInterface[] = filteredProjects.map(
      (project) => {
        return { id: project.id, name: project.name };
      }
    );
    setHeaders(headers);

    const images: CarouselImageInterface[] = filteredProjects.map((project) => {
      return { id: project.id, name: project.name, src: project.img };
    });
    setImages(images);
    // Esse index só serve para as informações do carousel, eu tenho que alterar o index das imagens também
    setCarouselIndex(0);
  }, [filteredProjects]);

  React.useEffect(() => {
    const items: string[] = projects.reduce((acc: string[], project) => {
      project.technologies.forEach((tech) => {
        if (!acc.includes(tech)) acc.push(tech);
      });
      return acc;
    }, []);
    setSelectItems(items);
  }, []);

  function onChangeIndex(currentIndex: number) {
    setCarouselIndex(currentIndex);
  }

  function searchTech(value: string) {
    const filteredProjects = projects.reduce(
      (acc: ProjectInterface[], project) => {
        project.technologies.forEach((tech) => {
          if (tech === value) acc.push(project);
        });
        return acc;
      },
      []
    );
    setFilteredProjects(filteredProjects);
  }

  return (
    <div id="projects" className="mx-auto">
      <Select
        items={selectItems}
        placeholder="Selecione a tecnologia desejada"
        onChange={searchTech}
      />
      {projects && !!projects.length && (
        <Carousel
          headers={headers}
          images={images}
          onChangeIndex={onChangeIndex}
        >
          <CarouselData data={filteredProjects} currentIndex={carouselIndex} />
        </Carousel>
      )}
    </div>
  );
}

export default Projects;
