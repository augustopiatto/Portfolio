import Carousel from "../UIComponents/Carousel/Carousel";
import CarouselData from "../UIComponents/Carousel/CarouselData";
import { projects } from "../../helpers/infos";
import React from "react";
import {
  CarouselHeaderInterface,
  CarouselImageInterface,
} from "../../helpers/interfaces/interfaces";
import Select from "../HTMLComponents/Select";

function Projects() {
  const [carouselIndex, setCarouselIndex] = React.useState<number>(0);

  const headers: CarouselHeaderInterface = projects.reduce((acc, project) => {
    acc[project.id - 1] = project.name;
    return acc;
  }, {} as { [key: number]: string });
  const images: CarouselImageInterface[] = projects.map((project) => {
    return { id: project.id, name: project.name, src: project.img };
  });
  const items: string[] = projects.reduce((acc: string[], project) => {
    project.technologies.forEach((tech) => {
      if (!acc.includes(tech)) acc.push(tech);
    });
    return acc;
  }, []);

  function onChangeIndex(currentIndex: number) {
    setCarouselIndex(currentIndex);
  }

  function searchTech() {
    console.log("oi");
  }

  return (
    <div id="projects" className="mx-auto">
      <Select
        items={items}
        placeholder="Selecione a tecnologia desejada"
        onClick={searchTech}
      />
      {projects && !!projects.length && (
        <Carousel
          headers={headers}
          images={images}
          onChangeIndex={onChangeIndex}
        >
          <CarouselData data={projects} currentIndex={carouselIndex} />
        </Carousel>
      )}
    </div>
  );
}

export default Projects;
