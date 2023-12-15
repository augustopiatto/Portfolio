import React, { useEffect } from "react";
import Button from "../../HTMLComponents/Button";
import ExpansionRight from "/svg/expansion-right.svg";
import CarouselHeader from "./CarouselHeader";
import CarouselStepper from "./CarouselStepper";
import CarouselDescription from "./CarouselDescription";
import { Data } from "../../../helpers/interfaces/interfaces";

interface Carrousel {
  children: React.ReactElement[];
  headers: string[];
  data: Data[];
  stepper?: boolean;
}

function Carrousel({ children, headers, data, stepper = false }: Carrousel) {
  const childArray = React.Children.toArray(children);
  React.Children.map(childArray, (child) => {
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

  function previous() {
    if (currentIndex === 0) {
      return setCurrentIndex(childArray.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  }

  function next() {
    return carouselInfiniteScroll();
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
      {headers && !!headers.length && (
        <CarouselHeader headers={headers} currentIndex={currentIndex} />
      )}
      <div className="flex relative overflow-hidden">
        <div className="absolute z-10 cursor-pointer [&>*]:h-[400px] [&>*]:rounded-3xl [&>button]:bg-transparent [&>button]:shadow-none">
          <Button onClick={previous}>
            <img
              src={ExpansionRight}
              alt="expansion-right"
              className="absolute top-1/2 left-[10%] h-4 w-6 opacity-30 rotate-180 visible"
            />
          </Button>
        </div>
        {React.Children.map(childArray, (child, index) => {
          return (
            <div
              id="carousel-item"
              className="min-w-full h-[400px] flex items-center justify-center [&>*]:w-full [&>*]:h-full [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={index}
            >
              {child}
            </div>
          );
        })}
        <div className="absolute right-0 z-10 cursor-pointer [&>*]:h-[400px] [&>*]:rounded-3xl  [&>button]:bg-transparent [&>button]:shadow-none">
          <Button onClick={next}>
            <img
              src={ExpansionRight}
              alt="expansion-right"
              className="absolute top-1/2 right-[10%] h-4 w-6 opacity-30 visible"
            />
          </Button>
        </div>
      </div>
      {data && !!data.length && (
        <CarouselDescription data={data} currentIndex={currentIndex} />
      )}
    </div>
  );
}

export default Carrousel;
