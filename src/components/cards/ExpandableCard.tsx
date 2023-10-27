import { ReactNode } from "react";
import Card from "./Card.tsx";
import expansionRight from "../../assets/svg/expansion-right.svg";

interface ExpandableCard {
  borderRadius?: string;
  children: ReactNode;
  maxWidth?: string;
  place?: string;
  projectFlag?: boolean;
}

// talvez usar injection direto no Card e nao precisar desses intermediarios

function ExpandableCard({
  borderRadius,
  children,
  maxWidth,
  place,
  projectFlag = false,
}: ExpandableCard) {
  const projectCSS = "absolute bottom-7 right-7 cursor-pointer";
  const generalCSS =
    "bg-card rounded-b w-14 px-4 pb-3 pt-0 shadow-expansion shadow-light-grey relative cursor-pointer";

  return (
    <div className="relative">
      <Card borderRadius={borderRadius} maxWidth={maxWidth} place={place}>
        {children}
      </Card>
      <div className={projectFlag ? projectCSS : generalCSS}>
        <img src={expansionRight} alt="expansion-right" className="h-4 w-6" />
      </div>
    </div>
  );
}

export default ExpandableCard;
