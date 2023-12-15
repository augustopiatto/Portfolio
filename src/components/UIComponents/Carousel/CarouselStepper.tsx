interface CarouselStepper {
  children: (
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
  )[];
  currentIndex: number;
}

function CarouselStepper({ children, currentIndex }: CarouselStepper) {
  function idxBackgroundColor(idx: number) {
    if (currentIndex >= idx) {
      return "bg-primary";
    }
    return "bg-transparent";
  }

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-10">
      {children.map((_, index) => (
        <div
          className={`h-4 w-4 mt-5 rounded-full border-2 border-black ${idxBackgroundColor(
            index
          )}`}
          key={index}
        ></div>
      ))}
    </div>
  );
}

export default CarouselStepper;
