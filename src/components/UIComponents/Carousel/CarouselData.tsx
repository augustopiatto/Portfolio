import React from "react";
import Tag from "../Tag";
import ExpansionRight from "/svg/expansion-right.svg";
import Dialog from "../Dialog/Dialog";
import ProjectsDialog from "../Dialog/ProjectsDialog";
import { ProjectInterface } from "../../../helpers/interfaces/interfaces";

interface CarouselDescriptionInterface {
  data: ProjectInterface[];
  currentIndex: number;
}

function CarouselDescription({
  data,
  currentIndex,
}: CarouselDescriptionInterface) {
  const [openedDialog, setOpenedDialog] = React.useState<boolean>(false);
  const [dialogInfo, setDialogInfo] = React.useState<ProjectInterface | null>(
    null
  );

  function openDialog(info: ProjectInterface) {
    setDialogInfo(info);
    setOpenedDialog(true);
  }

  function isScreenSizeSmall() {
    return window.matchMedia("(max-width: 425px)").matches;
  }

  if (!data || !data.length) return;
  return (
    <div>
      {data.map((info, index) => (
        <div key={index}>
          {index === currentIndex && (
            <div className="flex flex-col justify-around pb-5 relative">
              <div className="w-full flex mb-5 gap-5 px-10">
                <h2 className="font-bebas text-title text-xl medium:text-2xl">
                  Descrição
                </h2>
                <p className="font-chivo text-paragraph text-base medium:text-xl">
                  {info.description}
                </p>
              </div>
              <div className="w-full flex items-center gap-5 px-10">
                <h2 className="font-bebas text-title text-xl medium:text-2xl">
                  Tecnologias
                </h2>
                <div className="flex flex-wrap gap-5">
                  {isScreenSizeSmall()
                    ? info.technologies
                        .slice(0, 4)
                        .map((tag) => <Tag text={tag} key={tag} />)
                    : info.technologies.map((tag) => (
                        <Tag text={tag} key={tag} />
                      ))}
                </div>
              </div>
              <div
                className="absolute right-3 -bottom-4 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.2]"
                onClick={() => openDialog(info)}
              >
                <img
                  src={ExpansionRight}
                  alt="expansion-right"
                  className="h-4 w-6"
                />
              </div>
            </div>
          )}
        </div>
      ))}
      <Dialog openedDialog={openedDialog} setOpenedDialog={setOpenedDialog}>
        <ProjectsDialog info={dialogInfo} />
      </Dialog>
    </div>
  );
}

export default CarouselDescription;
