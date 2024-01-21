import { ProjectInterface } from "../../../helpers/interfaces/interfaces";
import FullDivider from "../../dividers/FullDivider";
import Icon from "../Icon";

interface ProjectsDialogInterface {
  info: ProjectInterface | null;
}

function ProjectsDialog({ info }: ProjectsDialogInterface) {
  if (!info) return;
  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="font-bebas text-4xl uppercase leading-tight">
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
      <section className="flex flex-col gap-3 mt-7 [&>p]:font-chivo [&>p]:text-lg">
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
