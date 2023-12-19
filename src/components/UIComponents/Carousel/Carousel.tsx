import React, { useEffect } from "react";
import CarouselHeader from "./CarouselHeader";
import CarouselStepper from "./CarouselStepper";
import {
  CarouselHeaderInterface,
  CarouselImageInterface,
} from "../../../helpers/interfaces/interfaces";
import CarouselImages from "./CarouselImages";

interface Carousel {
  children: React.ReactNode;
  headers: CarouselHeaderInterface;
  images: CarouselImageInterface[];
  onChangeIndex?: (value: number) => void;
}

function Carousel({ children, headers, images, onChangeIndex }: Carousel) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function carouselInfiniteScroll() {
    if (images && currentIndex === images.length - 1) {
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

  useEffect(() => {
    if (onChangeIndex) onChangeIndex(currentIndex);
  }, [currentIndex, onChangeIndex]);

  return (
    <div className="max-w-4xl bg-card shadow-expansion shadow-light-grey rounded-3xl flex flex-col gap-5 py-5">
      <CarouselStepper images={images} currentIndex={currentIndex} />
      {headers && (
        <CarouselHeader headers={headers} currentIndex={currentIndex} />
      )}
      <CarouselImages
        images={images}
        currentIndex={currentIndex}
        carouselInfiniteScroll={carouselInfiniteScroll}
        setCurrentIndex={setCurrentIndex}
      />
      {children}
    </div>
  );
}

export default Carousel;
