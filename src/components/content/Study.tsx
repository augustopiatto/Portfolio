import ExpandableCard from "../cards/ExpandableCard";
import { majors } from "../../../src/infos.tsx";
import { Major } from "../../helpers/interfaces.tsx";

function Study() {
  return (
    <div className="flex flex-col gap-12">
      {majors.length &&
        majors.map((major: Major) => (
          <ExpandableCard
            borderRadius={"rounded-ordinary-expansion"}
            place={major.location}
            key={major.name}
          >
            <div className="flex flex-col gap-3">
              <h1 className="font-bebas text-4xl capitalize">{major.name}</h1>
              <h2 className="font-chivo font-bold text-xl">{major.college}</h2>
              <p className="font-chivo font-bold text-base">{major.term}</p>
            </div>
          </ExpandableCard>
        ))}
    </div>
  );
}

export default Study;
