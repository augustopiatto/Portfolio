import React, { ReactNode } from "react";

interface ButtonInterface {
  children?: ReactNode;
  onClick: React.MouseEventHandler;
}

function Button({ children, onClick }: ButtonInterface) {
  return (
    <button
      className="bg-primary rounded-large shadow-expansion shadow-light-grey px-32 py-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
