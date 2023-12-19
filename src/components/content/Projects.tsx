import Carousel from "../UIComponents/Carousel/Carousel";
import CarouselData from "../UIComponents/Carousel/CarouselData";
import { projects } from "../../helpers/infos";
import React from "react";
import {
  CarouselHeaderInterface,
  CarouselImageInterface,
} from "../../helpers/interfaces/interfaces";

function Projects() {
  const [carouselIndex, setCarouselIndex] = React.useState<number>(0);

  const headers: CarouselHeaderInterface = projects.reduce((acc, project) => {
    acc[project.id - 1] = project.name;
    return acc;
  }, {} as { [key: number]: string });
  const images: CarouselImageInterface[] = projects.map((project) => {
    return { id: project.id, name: project.name, src: project.img };
  });

  function onChangeIndex(currentIndex: number) {
    setCarouselIndex(currentIndex);
  }

  return (
    <div id="projects" className="mx-auto">
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
