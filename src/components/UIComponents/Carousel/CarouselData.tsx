import React from "react";
import Tag from "../Tag";
import ExpansionRight from "/svg/expansion-right.svg";
import Dialog from "../Dialog/Dialog";
import ProjectsDialog from "../Dialog/ProjectsDialog";
import { ProjectInterface } from "../../../helpers/interfaces/interfaces";
import { isScreenSizeSmall } from "../../../helpers/helperFunctions";

interface CarouselDataInterface {
  data: ProjectInterface[];
  currentIndex: number;
}

function CarouselData({ data, currentIndex }: CarouselDataInterface) {
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
                <h2 className="font-bebas text-title text-xl medium:text-2xl">
                  Descrição
                </h2>
                <p className="font-chivo text-secondary text-base medium:text-xl">
                  {info.description}
                </p>
              </div>
              <div className="w-full flex items-start gap-5 px-10">
                <h2 className="font-bebas text-title leading-5 text-xl medium:text-2xl">
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
}

export default CarouselData;
