import React from "react";
import ExpansionRight from "/svg/expansion-right.svg";
import { ProjectInterface } from "../../../../helpers/interfaces/interfaces";
import { isScreenSizeSmall } from "../../../../helpers/helperFunctions";
import { Dialog, ProjectsDialog } from "../../dialog";
import { Tag } from "../..";

interface CarouselDataInterface {
  data: ProjectInterface[];
  currentIndex: number;
}

export const CarouselData = ({ data, currentIndex }: CarouselDataInterface) => {
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
      {data.map(
        (info, index) =>
          index === currentIndex && (
            <div
              className="min-h-[156px] h-full flex flex-col justify-around"
              key={index}
            >
              <div className="w-full flex mb-5 gap-5 px-10">
                <h2 className="title-font text-xl medium:text-3xl">
                  Descrição
                </h2>
                <p className="text-font">{info.description}</p>
              </div>
              <div className="w-full flex items-start gap-5 px-10">
                <h2 className="title-font leading-5 text-xl medium:text-3xl">
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
              <div className="absolute right-5 bottom-3 h-12 w-12 rounded-full flex justify-center items-center">
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded flex justify-center items-center cursor-pointer hover:bg-lighter-card-bg"
                  onClick={() => openDialog(info)}
                >
                  <img
                    src={ExpansionRight}
                    alt="expansion-right"
                    className="h-4 w-6 mx-6 my-[6px] hover:scale-[1.1]"
                  />
                </div>
              </div>
            </div>
          )
      )}
      {openedDialog && (
        <Dialog setOpenedDialog={setOpenedDialog}>
          <ProjectsDialog info={dialogInfo} />
        </Dialog>
      )}
    </div>
  );
};
