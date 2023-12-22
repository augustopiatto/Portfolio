import React from "react";

interface SliderInterface {
  children: React.ReactNode;
}

function Slider({ children }: SliderInterface) {
  return <div className="">{children}</div>;
}

export default Slider;
