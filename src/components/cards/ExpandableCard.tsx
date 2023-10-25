import { ReactNode } from "react";
import Card from "./Card.tsx";
import expansion from "../../assets/svg/expansion.svg";

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
  projectFlag = true,
}: ExpandableCard) {
  const projectCSS = "";
  const generalCSS =
    "bg-card rounded-b w-14 px-4 pb-3 pt-0 shadow-expansion shadow-light-grey relative";

  return (
    <div>
      <Card borderRadius={borderRadius} maxWidth={maxWidth} place={place}>
        {children}
      </Card>
      {projectFlag ? (
        <div className={generalCSS}>
          <img src={expansion} alt="expansion" className="h-4 w-6" />
        </div>
      ) : (
        <div className={projectCSS}></div>
      )}
    </div>
  );
}

export default ExpandableCard;
