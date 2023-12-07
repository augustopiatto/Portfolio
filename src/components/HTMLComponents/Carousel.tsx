import React, { useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-4xl flex flex-nowrap overflow-hidden rounded-3xl">
      {React.Children.map(childArray, (child, index) => {
        return (
          <div
            id="carousel-item"
            className="w-full min-w-full h-full flex items-center justify-center [&>*]:w-full [&>*]:h-full [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:bg-slate-400"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export default Carrousel;
