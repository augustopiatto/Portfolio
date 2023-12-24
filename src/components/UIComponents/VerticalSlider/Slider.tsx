import React from "react";

interface SliderInterface {
  children: React.ReactNode;
}

function Slider({ children }: SliderInterface) {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [offsetHeight, setOffsetHeight] = React.useState<number>(0);
  const [sliderItemsHeight, setSliderItemsHeight] = React.useState<number>(0);

  // 4 pixels a menos só pra aparecer o sombreado
  const parentHeight = 820;
  const childrenArray = React.Children.toArray(children);

  function sliderInfiniteScroll() {
    const topElement = document.getElementById(`slider-item-${currentIndex}`);
    if (topElement) {
      if (offsetHeight === sliderItemsHeight - parentHeight) {
        setOffsetHeight(0);
        return setCurrentIndex(0);
      } else if (
        sliderItemsHeight - (offsetHeight + topElement?.clientHeight + 40) <
        parentHeight
      ) {
        setOffsetHeight(sliderItemsHeight - parentHeight);
      } else {
        setOffsetHeight(offsetHeight + topElement?.clientHeight + 40);
        return setCurrentIndex(currentIndex + 1);
      }
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      sliderInfiniteScroll();
    }, 2000);
    return () => clearInterval(interval);
  });

  React.useEffect(() => {
    const getSliderHeight = () => {
      const idPrefix = "slider-item-";
      const sliderItems = document.querySelectorAll(`[id^="${idPrefix}"]`);
      let totalHeight = 0;
      sliderItems.forEach((element) => {
        totalHeight += element.clientHeight;
      });
      const totalHeightPlusGap = totalHeight + (sliderItems.length - 1) * 40;
      setSliderItemsHeight(totalHeightPlusGap);
    };

    window.addEventListener("load", getSliderHeight);

    return () => {
      window.removeEventListener("load", getSliderHeight);
    };
  }, []);

  if (!childrenArray || !childrenArray.length) return;
  return (
    <div className="flex flex-col gap-10 overflow-hidden pr-1">
      {childrenArray.map((child, index) => (
        <div
          id={`slider-item-${index}`}
          style={{
            transform: `translateY(-${offsetHeight}px)`,
          }}
          className=""
          key={index}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default Slider;
