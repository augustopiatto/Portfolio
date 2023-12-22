import { ReactNode } from "react";
import Card from "./Card.tsx";
import ExpansionRight from "/svg/expansion-right.svg";
import SeparatorLine from "../dividers/SeparatorLine.tsx";

interface ExpandableCard {
  borderRadius?: string;
  children: ReactNode;
  maxWidth?: string;
  place?: string;
  openDialog: () => void;
}

// talvez usar injection direto no Card e nao precisar desses intermediarios

function ExpandableCard({
  borderRadius,
  children,
  maxWidth,
  place,
  openDialog,
}: ExpandableCard) {
  return (
    <div className="relative">
      <Card borderRadius={borderRadius} maxWidth={maxWidth}>
        {children}
        {place && (
          <div className="flex items-center gap-7 mt-7">
            <SeparatorLine />
            <span className="font-chivo text-paragraph text-lg">{place}</span>
          </div>
        )}
      </Card>
      <div
        className="bg-card rounded-b w-14 px-4 pb-3 pt-0 shadow-expansion shadow-light-grey relative cursor-pointer"
        onClick={openDialog}
      >
        <img
          src={ExpansionRight}
          alt="expansion-right"
          className="h-4 w-6 hover:scale-[1.2]"
        />
      </div>
    </div>
  );
}

export default ExpandableCard;
