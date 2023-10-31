import React, { ReactNode } from "react";

interface Button {
  children?: ReactNode;
  onClick: React.MouseEventHandler;
}

function Button({ children, ...props }: Button) {
  return (
    <button
      {...props}
      className="bg-primary rounded-large shadow-expansion shadow-light-grey px-32 py-4"
    >
      {children}
    </button>
  );
}

export default Button;
