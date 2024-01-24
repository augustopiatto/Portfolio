import { ProjectInterface } from "../../../helpers/interfaces/interfaces";
import FullDivider from "../../dividers/FullDivider";
import Icon from "../Icon";
import Tag from "../Tag";

interface ProjectsDialogInterface {
  info: ProjectInterface | null;
}

function ProjectsDialog({ info }: ProjectsDialogInterface) {
  if (!info) return;
  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="font-bebas text-4xl text-title uppercase leading-tight">
          {info.name}
        </h1>
        <div className="mb-2 large:pr-10">
          <Icon
            href={info.details.href}
            name={info.name}
            src="/svg/github.svg"
          />
        </div>
      </div>
      <FullDivider />
      <div className="flex flex-wrap gap-3 mt-3 mb-7">
        {info.technologies.map((tag) => (
          <Tag text={tag} small key={tag} />
        ))}
      </div>
      <section className="flex flex-col gap-3 text-secondary [&>p]:font-chivo [&>p]:text-lg">
        <p>{info.details.objective}</p>
      </section>
      <FullDivider marginBottom="mb-10" marginTop="mt-5" />
      <section className="flex justify-center gap-5">
        {info.details.moreImages.map((img) => (
          <img src={img.src} alt={img.name} key={img.name} />
        ))}
      </section>
    </>
  );
}

export default ProjectsDialog;
