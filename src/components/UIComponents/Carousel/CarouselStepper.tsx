interface CarouselStepper {
  children: (
    | string
    | number
    | React.ReactElement<string | string | React.JSXElementConstructor<string>>
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
    <div className="flex justify-center gap-10">
      {children.map((_, index) => (
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
