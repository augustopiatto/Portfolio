import { CarouselImageInterface } from "../../../helpers/interfaces/interfaces";

interface CarouselStepperInterface {
  images: CarouselImageInterface[];
  currentIndex: number;
}

function CarouselStepper({ images, currentIndex }: CarouselStepperInterface) {
  function idxBackgroundColor(idx: number) {
    if (currentIndex === idx) {
      return "bg-highlight";
    }
    return "bg-transparent";
  }

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {!!images.length &&
        images.map((_, index) => (
          <div
            className={`h-4 w-4 rounded-full border-2 border-black ${idxBackgroundColor(
              index
            )}`}
            key={index}
          ></div>
        ))}
    </div>
  );
}

export default CarouselStepper;
