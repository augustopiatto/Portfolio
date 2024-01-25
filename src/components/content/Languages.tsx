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
          className="absolute right-0 h-6 w-6 medium:h-10 medium:w-10"
        />
        {languages.map((language: LanguageType) => (
          <div className="grid grid-cols-12 items-center" key={language.id}>
            <h2 className="col-span-5 title-font">{language.name}</h2>
            <p className="col-span-7 text-font">{language.level}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default Languages;
