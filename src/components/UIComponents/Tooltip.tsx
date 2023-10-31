import { ReactNode } from "react";

interface Tooltip {
  children: ReactNode;
}

function Tooltip({ children }: Tooltip) {
  return <div id="tooltip">{children}</div>;
}

export default Tooltip;
