import React, { useEffect } from "react";
import CarouselHeader from "./CarouselHeader";
import CarouselStepper from "./CarouselStepper";
import {
  DataInterface,
  CarouselHeaderInterface,
  CarouselImageInterface,
} from "../../../helpers/interfaces/interfaces";
import CarouselData from "./CarouselData";
import CarouselImages from "./CarouselImages";

interface Carousel {
  headers: CarouselHeaderInterface;
  data: DataInterface;
  images: CarouselImageInterface[];
}

function Carousel({ headers, data, images }: Carousel) {
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
      {data && <CarouselData data={data} currentIndex={currentIndex} />}
    </div>
  );
}

export default Carousel;
