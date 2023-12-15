import React, { ReactNode } from "react";

interface CarouselDescription {
  children?: ReactNode;
  onClick: React.MouseEventHandler;
}

function CarouselDescription({ children, ...props }: CarouselDescription) {
  return (
    <button
      {...props}
      className="bg-primary rounded-large shadow-expansion shadow-light-grey px-32 py-4"
    >
      {children}
    </button>
  );
}

export default CarouselDescription;
