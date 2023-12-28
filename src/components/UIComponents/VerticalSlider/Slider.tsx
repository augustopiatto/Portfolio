import React from "react";
import Button from "../../HTMLComponents/Button";
import expansionRightWhite from "/svg/expansion-right-white.svg";

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
        return setCurrentIndex(currentIndex + 1);
      } else {
        setOffsetHeight(offsetHeight + topElement?.clientHeight + 40);
        return setCurrentIndex(currentIndex + 1);
      }
    }
  }

  function previous() {
    if (currentIndex === 0) {
      return setCurrentIndex(0);
    }
    const previousElement = document.getElementById(
      `slider-item-${currentIndex - 1}`
    );
    if (previousElement) {
      if (offsetHeight - (previousElement?.clientHeight + 40) < 0) {
        setOffsetHeight(0);
        return setCurrentIndex(0);
      }
      setOffsetHeight(offsetHeight - (previousElement?.clientHeight + 40));
      return setCurrentIndex(currentIndex - 1);
    }
  }

  function next() {
    return sliderInfiniteScroll();
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      sliderInfiniteScroll();
    }, 5000);
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
    <div className="relative flex flex-col gap-10 overflow-hidden pr-1">
      <div className="absolute z-10 cursor-pointer h-[7%] right-0 w-20 [&>*]:w-20 [&>*]:px-0 [&>*]:py-0 [&>*]:h-full [&>*]:rounded-bl-2xl [&>*]:rounded-br-none [&>*]:rounded-t-none [&>button]:bg-primary [&>button]:shadow-none [&>button]:border-none [&>button]:hover:shadow-button-inner">
        <Button onClick={previous}>
          <img
            src={expansionRightWhite}
            alt="expansion-right"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-6 -rotate-90 visible"
          />
        </Button>
      </div>
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
      <div className="absolute bottom-0 z-10 cursor-pointer h-[7%] right-0 w-20 [&>*]:w-20 [&>*]:px-0 [&>*]:py-0 [&>*]:h-full [&>*]:rounded-tl-3xl [&>*]:rounded-tr-none [&>*]:rounded-b-none [&>button]:bg-primary [&>button]:shadow-none [&>button]:border-none [&>button]:hover:shadow-button-inner">
        <Button onClick={next}>
          <img
            src={expansionRightWhite}
            alt="expansion-right"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-6 rotate-90 visible"
          />
        </Button>
      </div>
    </div>
  );
}

export default Slider;
