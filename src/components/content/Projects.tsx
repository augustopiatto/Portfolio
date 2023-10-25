import Button from "../HTMLComponents/Button";
import ExpandableCard from "../cards/ExpandableCard";
import Tag from "./Tag";

function Projects() {
  const tags = ["HTML", "Vue", "CSS"];

  return (
    <div className="mt-16 mx-auto">
      <ExpandableCard maxWidth="max-w-4xl">
        <h1 className="font-bebas text-3xl text-title">React - Origamid</h1>
        <div>Imagens aqui</div>
        <div className="flex items-center my-5 gap-5">
          <h2 className="font-bebas text-xl">Descrição</h2>
          <p className="font-chivo text-sm text-paragraph">
            Este projeto é ...
          </p>
        </div>
        <div className="flex items-center gap-5">
          <h2 className="font-bebas text-xl text-title">Tecnologias</h2>
          <div className="flex gap-5">
            {tags && tags.map((tag) => <Tag text={tag} />)}
          </div>
        </div>
      </ExpandableCard>
      <Button>svg aqui</Button>
    </div>
  );
}

export default Projects;
