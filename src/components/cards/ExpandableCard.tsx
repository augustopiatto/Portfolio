import { ReactNode } from "react";
import Card from "./Card.tsx";

interface ExpandableCard {
  place: string;
  children: ReactNode;
}

// talvez usar injection direto no Card e nao precisar desses intermediarios

function ExpandableCard({ place, children }: ExpandableCard) {
  return <Card place={place}>{children}</Card>;
}

export default ExpandableCard;
