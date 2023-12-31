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

  if (!data || !data.length) return;
  return (
    <div>
      {data.map((info, index) => (
        <div key={index}>
          {index === currentIndex && (
            <div className="flex flex-col justify-around h-40 pb-5 relative">
              <div className="w-full flex mb-5 gap-5 px-10">
                <h2 className="font-bebas text-2xl text-title">Descrição</h2>
                <p className="font-chivo text-xl text-paragraph">
                  {info.description}
                </p>
              </div>
              <div className="w-full flex items-center gap-5 px-10">
                <h2 className="font-bebas text-2xl text-title">Tecnologias</h2>
                <div className="flex flex-wrap gap-5">
                  {info.technologies.map((tag) => (
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
