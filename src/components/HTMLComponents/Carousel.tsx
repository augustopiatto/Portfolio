import React, { useEffect } from "react";
import Button from "../HTMLComponents/Button";
import ExpansionRight from "/svg/expansion-right.svg";

interface Carrousel {
  children: React.ReactElement | React.ReactElement[];
}

function Carrousel({ children }: Carrousel) {
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
    return;
  }

  function next() {
    return;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-4xl bg-card shadow-expansion shadow-light-grey flex flex-nowrap overflow-hidden rounded-3xl relative">
      <div className="absolute z-10 [&>*]:h-[600px] [&>*]:rounded-3xl [&>button]:opacity-0">
        <Button onClick={previous} />
        <img
          src={ExpansionRight}
          alt="expansion-right"
          className="absolute top-0 left-[10%] h-4 w-6 cursor-pointer opacity-30 rotate-180"
        />
      </div>
      {React.Children.map(childArray, (child, index) => {
        return (
          <div
            id="carousel-item"
            className="min-w-full h-[600px] flex items-center justify-center [&>*]:w-full [&>*]:h-full [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            {child}
          </div>
        );
      })}
      <div className="absolute right-0 z-10 [&>*]:h-[600px] [&>*]:rounded-3xl [&>button]:opacity-0">
        <Button onClick={next} />
        <img
          src={ExpansionRight}
          alt="expansion-right"
          className="absolute top-0 right-[10%] h-4 w-6 cursor-pointer opacity-30"
        />
      </div>
    </div>
  );
}

export default Carrousel;
