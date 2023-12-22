import React from "react";

interface SliderInterface {
  children: React.ReactNode;
}

function Slider({ children }: SliderInterface) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const childrenArray = React.Children.toArray(children);
  const cardSizePlusGap = 208 + 105;

  function sliderInfiniteScroll() {
    if (currentIndex === childrenArray.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      sliderInfiniteScroll();
    }, 10000);
    return () => clearInterval(interval);
  });

  if (!childrenArray || !childrenArray.length) return;
  return (
    <div className="flex flex-col gap-[105px] max-h-[824px] pb-5 overflow-hidden">
      {childrenArray.map((child, index) => (
        <div
          id="slider-item"
          style={{
            transform: `translateY(-${currentIndex * cardSizePlusGap}px)`,
          }}
          key={index}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default Slider;
