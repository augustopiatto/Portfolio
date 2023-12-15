interface CarouselHeader {
  headers: string[];
  currentIndex: number;
}

function CarouselHeader({ headers, currentIndex }: CarouselHeader) {
  return (
    <div className="flex justify-center min-w-full">
      <h1 className="font-bebas text-3xl text-title">
        {headers[currentIndex]}
      </h1>
    </div>
  );
}

export default CarouselHeader;
