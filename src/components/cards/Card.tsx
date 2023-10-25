import { ReactNode } from "react";

interface Card {
  place?: string;
  children: ReactNode;
}

function Card({ place, children }: Card) {
  return (
    <div
      id="teste"
      className="bg-card rounded-card max-w-screen-sm p-7 relative shadow-card shadow-light-grey"
    >
      {children}
      {place && (
        <div className="flex items-center gap-7">
          <div className="rounded bg-highlight h-1.5 grow"></div>
          <span className="font-chivo text-paragraph text-lg">{place}</span>
        </div>
      )}
    </div>
  );
}

export default Card;
