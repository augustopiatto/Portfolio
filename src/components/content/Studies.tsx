import ExpandableCard from "../cards/ExpandableCard.tsx";
import { majors } from "../../infos.tsx";
import { Major } from "../../helpers/types/types.tsx";
import SeparatorDot from "../dividers/SeparatorDot.tsx";

function Study() {
  if (!majors.length) return;
  return (
    <div className="flex flex-col gap-12">
      {majors.map((major: Major) => (
        <ExpandableCard
          borderRadius={"rounded-ordinary-expansion"}
          place={major.location}
          key={major.id}
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-bebas text-4xl capitalize">{major.name}</h1>
            <div className="flex justify-between items-center">
              <h2 className="font-chivo font-bold text-xl">{major.college}</h2>
              <SeparatorDot />
              <p className="font-chivo font-bold text-paragraph">
                {major.type}
              </p>
              <SeparatorDot />
              <p className="font-chivo font-bold text-paragraph">
                {major.grade}
              </p>
            </div>
            <p className="font-chivo font-bold text-paragraph">{major.term}</p>
          </div>
        </ExpandableCard>
      ))}
    </div>
  );
}

export default Study;
