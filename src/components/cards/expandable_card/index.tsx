import { ReactNode } from "react";
import ExpansionRight from "/svg/expansion-right.svg";
import { Card } from "../card";
import { SeparatorLine } from "../../dividers";

interface ExpandableCardInterface {
  borderRadius?: string;
  children: ReactNode;
  maxWidth?: string;
  place?: string;
  openDialog: () => void;
}

export const ExpandableCard = ({
  borderRadius,
  children,
  maxWidth,
  place,
  openDialog,
}: ExpandableCardInterface) => {
  return (
    <div className="relative">
      <Card borderRadius={borderRadius} maxWidth={maxWidth}>
        {children}
        {place && (
          <div className="flex mt-7 items-center gap-7">
            <SeparatorLine />
            <span className="text-font text-title">{place}</span>
          </div>
        )}
      </Card>
      <div className="bg-card-background rounded-b h-10 w-20 shadow-expansion relative">
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded flex justify-center items-center cursor-pointer hover:bg-lighter-card-bg"
          onClick={openDialog}
        >
          <img
            src={ExpansionRight}
            alt="expansion-right"
            className="h-4 w-6 mx-6 my-[6px] hover:scale-[1.1]"
          />
        </div>
      </div>
    </div>
  );
};
