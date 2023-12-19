import { CarouselImageInterface } from "../../../helpers/interfaces/interfaces";
import Button from "../../HTMLComponents/Button";
import ExpansionRight from "/svg/expansion-right.svg";

interface CarouselImages {
  images: CarouselImageInterface[];
  currentIndex: number;
  carouselInfiniteScroll: () => void;
  setCurrentIndex: (value: number) => void;
}

function CarouselImages({
  images,
  currentIndex,
  carouselInfiniteScroll,
  setCurrentIndex,
}: CarouselImages) {
  function previous() {
    if (currentIndex === 0) {
      return setCurrentIndex(images.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  }

  function next() {
    return carouselInfiniteScroll();
  }

  return (
    <div className="flex relative overflow-hidden">
      <div className="absolute z-10 cursor-pointer h-full [&>*]:h-full [&>*]:rounded-3xl [&>button]:bg-transparent [&>button]:shadow-none">
        <Button onClick={previous}>
          <img
            src={ExpansionRight}
            alt="expansion-right"
            className="absolute top-1/2 left-[10%] h-4 w-6 opacity-30 rotate-180 visible"
          />
        </Button>
      </div>
      {images.map((image) => {
        return (
          <div
            id="carousel-item"
            className="min-w-full flex items-center justify-center [&>*]:w-full [&>*]:h-full [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={image.id}
          >
            <img
              src={image.src}
              alt={image.name}
              className="max-w-full h-full"
            />
          </div>
        );
      })}
      <div className="absolute right-0 z-10 cursor-pointer h-full [&>*]:h-full [&>*]:rounded-3xl  [&>button]:bg-transparent [&>button]:shadow-none">
        <Button onClick={next}>
          <img
            src={ExpansionRight}
            alt="expansion-right"
            className="absolute top-1/2 right-[10%] h-4 w-6 opacity-30 visible"
          />
        </Button>
      </div>
    </div>
  );
}

export default CarouselImages;
