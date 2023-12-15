import React, { useEffect } from "react";
import CarouselHeader from "./CarouselHeader";
import CarouselStepper from "./CarouselStepper";
import {
  DataInterface,
  CarouselHeaderInterface,
} from "../../../helpers/interfaces/interfaces";
import CarouselData from "./CarouselData";
import CarouselImages from "./CarouselImages";

interface Carrousel {
  children: React.ReactElement[];
  headers: CarouselHeaderInterface;
  data: DataInterface;
  stepper?: boolean;
}

function Carrousel({ children, headers, data, stepper = false }: Carrousel) {
  const childArray = React.Children.toArray(children);
  childArray.map((child) => {
    if (!React.isValidElement<Carrousel>(child)) {
      return child;
    }
  });
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function carouselInfiniteScroll() {
    if (childArray && currentIndex === childArray.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-4xl bg-card shadow-expansion shadow-light-grey rounded-3xl flex flex-col gap-5 py-5">
      {stepper && (
        <CarouselStepper children={childArray} currentIndex={currentIndex} />
      )}
      {headers && (
        <CarouselHeader headers={headers} currentIndex={currentIndex} />
      )}
      <CarouselImages
        children={childArray}
        currentIndex={currentIndex}
        carouselInfiniteScroll={carouselInfiniteScroll}
        setCurrentIndex={setCurrentIndex}
      />
      {data && <CarouselData data={data} currentIndex={currentIndex} />}
    </div>
  );
}

export default Carrousel;
