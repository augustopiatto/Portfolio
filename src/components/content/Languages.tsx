import { LanguageType } from "../../helpers/types/types";
import { languages } from "../../helpers/infos";
import Card from "../cards/Card";
import LanguageSVG from "/svg/language.svg";

function Languages() {
  if (!languages.length) return;
  return (
    <Card borderRadius={"rounded-3xl"}>
      <div className="flex flex-col gap-5 relative">
        <img
          src={LanguageSVG}
          alt="language"
          className="absolute h-10 w-10 right-0"
        />
        {languages.map((language: LanguageType) => (
          <div className="grid grid-cols-12 items-center" key={language.id}>
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
