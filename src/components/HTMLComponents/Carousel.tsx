import React, { useEffect } from "react";

interface Carrousel {
  children: React.ReactElement[];
}

function Carrousel({ children }: Carrousel) {
  React.Children.map(children, (child) => {
    if (!React.isValidElement<Carrousel>(child)) {
      return child;
    }
  });
  const [currentIndex, setCurrentIndex] = React.useState(0);
  function carouselInfiniteScroll() {
    if (children && currentIndex === children.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-4xl flex flex-nowrap overflow-hidden rounded-3xl">
      {React.Children.map(children, (child, index) => {
        return (
          <div
            id="carousel-item"
            className="w-full min-w-full h-[200px] flex items-center justify-center"
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
