import { Icon, Tag } from "../..";
import { ProjectInterface } from "../../../../helpers/interfaces/interfaces";
import { FullDivider, PartialDivider } from "../../../dividers";

interface ProjectsDialogInterface {
  info: ProjectInterface | null;
}

export const ProjectsDialog = ({ info }: ProjectsDialogInterface) => {
  if (!info) return;
  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="title-font">{info.name}</h1>
        <div className="mb-2 large:pr-10">
          <Icon
            href={info.details.href}
            name={info.name}
            src="/svg/github.svg"
            small
          />
        </div>
      </div>
      <FullDivider />
      <div className="flex flex-wrap gap-3 mt-3 mb-7">
        {info.technologies.map((tag) => (
          <Tag text={tag} small key={tag} />
        ))}
      </div>
      <section className="flex flex-col gap-3 text-font">
        <p>{info.details.objective}</p>
      </section>
      <FullDivider marginBottom="mb-10" marginTop="mt-5" />
      <section className="flex flex-col items-center gap-10 title-font text-3xl">
        {info.details.moreImages.map((img, index) => (
          <div
            className="flex flex-col items-center gap-2 large:max-w-[80%]"
            key={img.id}
          >
            <h1>{img.name}</h1>
            <img
              src={img.src}
              alt={img.name}
              className="rounded-[24px] border-4 border-title"
            />
            {index !== info.details.moreImages.length - 1 && (
              <PartialDivider marginTop="mt-10" />
            )}
          </div>
        ))}
      </section>
    </>
  );
};
