import React from "react";
import {
  CarouselHeaderInterface,
  CarouselImageInterface,
} from "../../../helpers/interfaces/interfaces";
import { CarouselStepper } from "./carousel_stepper/CarouselStepper";
import { CarouselHeader } from "./carousel_header/CarouselHeader";
import { CarouselImages } from "./carousel_images/CarouselHeader";

interface CarouselInterface {
  children: React.ReactNode;
  headers: CarouselHeaderInterface[];
  images: CarouselImageInterface[];
  onChangeIndex?: (value: number) => void;
}

export const Carousel = ({
  children,
  headers,
  images,
  onChangeIndex,
}: CarouselInterface) => {
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
    <div className="bg-card-background shadow-expansion rounded-b-3xl rounded-t-md flex flex-col gap-5 pt-5 pb-16 relative">
      <CarouselStepper
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
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
};
