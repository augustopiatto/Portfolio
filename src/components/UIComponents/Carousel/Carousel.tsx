import React from "react";
import CarouselHeader from "./CarouselHeader";
import CarouselStepper from "./CarouselStepper";
import {
  CarouselHeaderInterface,
  CarouselImageInterface,
} from "../../../helpers/interfaces/interfaces";
import CarouselImages from "./CarouselImages";

interface CarouselInterface {
  children: React.ReactNode;
  headers: CarouselHeaderInterface[];
  images: CarouselImageInterface[];
  onChangeIndex?: (value: number) => void;
}

function Carousel({
  children,
  headers,
  images,
  onChangeIndex,
}: CarouselInterface) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function carouselInfiniteScroll() {
    if (images && currentIndex === images.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  React.useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        carouselInfiniteScroll();
      }, 10000);
      return () => clearInterval(interval);
    }
  });

  React.useEffect(() => {
    if (onChangeIndex) onChangeIndex(currentIndex);
  }, [currentIndex, onChangeIndex]);

  React.useEffect(() => {
    if (images && !!images.length) setCurrentIndex(0);
  }, [images]);

  return (
    <div className="max-w-4xl bg-card shadow-expansion shadow-light-grey rounded-b-3xl rounded-t-md flex flex-col gap-5 py-5">
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
