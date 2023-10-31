import Button from "../HTMLComponents/Button";
import ExpandableCard from "../cards/ExpandableCard";
import Tag from "../UIComponents/Tag";
import expansionBottom from "../../assets/svg/expansion-bottom.svg";

function Projects() {
  const tags = ["HTML", "Vue", "CSS"];

  return (
    <div className="mx-auto">
      <ExpandableCard maxWidth="max-w-4xl" projectFlag>
        <h1 className="font-bebas text-3xl text-title">React - Origamid</h1>
        <div className="w-project-image">Imagens aqui</div>
        <div className="flex items-center my-5 gap-5">
          <h2 className="font-bebas text-xl">Descrição</h2>
          <p className="font-chivo text-sm text-paragraph">
            Este projeto é ...
          </p>
        </div>
        <div className="flex items-center gap-5">
          <h2 className="font-bebas text-xl text-title">Tecnologias</h2>
          <div className="flex gap-5">
            {tags && tags.map((tag) => <Tag text={tag} key={tag} />)}
          </div>
        </div>
      </ExpandableCard>
      <div className="mt-12 flex justify-center">
        <Button>
          <img
            src={expansionBottom}
            alt="expansion-bottom"
            className="h-6 w-8"
          />
        </Button>
      </div>
    </div>
  );
}

export default Projects;
