import { ReactNode } from "react";
import Card from "./Card.tsx";
import expansion from "../../assets/svg/expansion.svg";

interface ExpandableCard {
  place: string;
  children: ReactNode;
}

// talvez usar injection direto no Card e nao precisar desses intermediarios

function ExpandableCard({ place, children }: ExpandableCard) {
  return (
    <div>
      <Card place={place}>{children}</Card>
      <div className="bg-card rounded-b w-14 px-4 pb-3 pt-0 shadow-expansion shadow-light-grey relative">
        <img src={expansion} alt="expansion" className="h-4 w-6" />
      </div>
    </div>
  );
}

export default ExpandableCard;
