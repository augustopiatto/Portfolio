import React, { ReactNode } from "react";

interface ButtonInterface {
  children?: ReactNode;
  secondary?: boolean;
  onClick: React.MouseEventHandler;
}

function Button({ children, secondary, ...props }: ButtonInterface) {
  const primaryClass =
    "bg-primary rounded-large shadow-expansion shadow-light-grey px-32 py-4";
  const secondaryClass =
    "flex justify-center items-center bg-secondary h-10 w-14 rounded-md border-2 border-black";

  return (
    <button {...props} className={secondary ? secondaryClass : primaryClass}>
      {children}
    </button>
  );
}

export default Button;
