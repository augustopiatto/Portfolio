import { ReactNode } from "react";
import Card from "./Card.tsx";
import ExpansionRight from "/svg/expansion-right.svg";

interface ExpandableCard {
  borderRadius?: string;
  children: ReactNode;
  maxWidth?: string;
  place?: string;
}

// talvez usar injection direto no Card e nao precisar desses intermediarios

function ExpandableCard({
  borderRadius,
  children,
  maxWidth,
  place,
}: ExpandableCard) {
  return (
    <div className="relative">
      <Card borderRadius={borderRadius} maxWidth={maxWidth} place={place}>
        {children}
      </Card>
      <div className="bg-card rounded-b w-14 px-4 pb-3 pt-0 shadow-expansion shadow-light-grey relative cursor-pointer">
        <img src={ExpansionRight} alt="expansion-right" className="h-4 w-6" />
      </div>
    </div>
  );
}

export default ExpandableCard;
