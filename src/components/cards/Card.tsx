import { ReactNode } from "react";

interface Card {
  borderRadius?: string;
  children: ReactNode;
  maxWidth?: string;
  place?: string;
}

function Card({
  borderRadius = "rounded-3xl",
  children,
  maxWidth = "max-w-screen-sm",
  place,
}: Card) {
  return (
    <div
      className={`${borderRadius} ${maxWidth} bg-card p-7 relative shadow-card shadow-light-grey`}
    >
      {children}
      {place && (
        <div className="flex items-center gap-7 mt-7">
          <div className="rounded bg-highlight h-1.5 grow"></div>
          <span className="font-chivo text-paragraph text-lg">{place}</span>
        </div>
      )}
    </div>
  );
}

export default Card;
