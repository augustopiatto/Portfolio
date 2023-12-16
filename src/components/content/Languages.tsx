import { languages } from "../../infos";
import Card from "../cards/Card";
import Language from "/svg/language.svg";

function Languages() {
  return (
    <Card borderRadius={"rounded-3xl"}>
      <div className="flex flex-col gap-5 relative">
        <img
          src={Language}
          alt="language"
          className="absolute h-10 w-10 right-0"
        />
        {languages &&
          !!languages &&
          languages.map((language) => (
            <div className="grid grid-cols-12 items-center">
              <h2 className="col-span-4 font-bebas text-4xl capitalize">
                {language.name}
              </h2>
              <p className="col-span-8 font-chivo font-bold text-paragraph text-xl">
                {language.level}
              </p>
            </div>
          ))}
      </div>
    </Card>
  );
}

export default Languages;
