import { ReactNode } from "react";

interface Card {
  place?: string;
  children: ReactNode;
}

function Card({ place, children }: Card) {
  return (
    <div className="bg-card rounded-large shadow-card max-w-screen-sm p-7">
      {children}
      {place && (
        <div className="flex items-center gap-7">
          <div className="rounded bg-highlight h-1.5 w-10"></div>
          <span className="font-chivo text-paragraph text-lg">{place}</span>
        </div>
      )}
    </div>
  );
}

export default Card;
