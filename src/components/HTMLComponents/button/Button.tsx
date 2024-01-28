import React, { ReactNode } from "react";

interface ButtonInterface {
  children?: ReactNode;
  onClick: React.MouseEventHandler;
}

export const Button = ({ children, onClick }: ButtonInterface) => {
  return (
    <button
      className="bg-highlight rounded-large shadow-expansion px-32 py-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
