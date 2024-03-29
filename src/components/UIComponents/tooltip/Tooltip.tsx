import { ReactNode } from "react";

interface Tooltip {
  children: ReactNode;
}

export const Tooltip = ({ children }: Tooltip) => {
  return (
    <div id="tooltip" className="inline-block align-middle medium:py-2">
      {children}
    </div>
  );
};
