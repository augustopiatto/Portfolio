import { ReactNode } from "react";

interface Button {
  children?: ReactNode;
}

function Button({ children }: Button) {
  return (
    <button className="bg-primary rounded-large px-32 py-4">{children}</button>
  );
}

export default Button;
