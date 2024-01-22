import { CarouselHeaderInterface } from "../../../helpers/interfaces/interfaces";

interface CarouselHeader {
  headers: CarouselHeaderInterface[];
  currentIndex: number;
}

function CarouselHeader({ headers, currentIndex }: CarouselHeader) {
  if (!headers || !headers.length) return;
  return (
    <div className="flex justify-center min-w-full">
      {headers.map((header, index) => (
        <div key={index}>
          {index === currentIndex && (
            <h1 className="font-bebas uppercase text-highlight text-3xl medium:text-4xl">
              {header.name}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
}

export default CarouselHeader;
