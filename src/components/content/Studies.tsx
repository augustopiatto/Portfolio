import ExpandableCard from "../cards/ExpandableCard.tsx";
import { majors } from "../../helpers/infos.tsx";
import { Dialogs, MajorType } from "../../helpers/types/types.tsx";
import SeparatorDot from "../dividers/SeparatorDot.tsx";
import React from "react";
import Dialog from "../UIComponents/Dialog/Dialog.tsx";
import UnespDialog from "../UIComponents/Dialog/UnespDialog.tsx";
import AlfredDialog from "../UIComponents/Dialog/AlfredDialog.tsx";

function Study() {
  const [openedUnespDialog, setOpenedUnespDialog] = React.useState(false);
  const [openedAlfredDialog, setOpenedAlfredDialog] = React.useState(false);

  function openDialog(key: number) {
    const dialogs: Dialogs = {
      1: () => setOpenedUnespDialog(true),
      2: () => setOpenedAlfredDialog(true),
    };
    dialogs[key as keyof Dialogs]();
  }

  if (!majors.length) return;
  return (
    <div className="flex flex-col gap-12">
      {majors.map((major: MajorType) => (
        <ExpandableCard
          borderRadius={"rounded-ordinary-expansion"}
          place={major.location}
          key={major.id}
          openDialog={() => openDialog(major.id)}
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-bebas capitalize text-2xl text-title medium:text-4xl">
              {major.name}
            </h1>
            <div className="flex justify-between gap-2 items-center flex-wrap">
              <h2 className="font-chivo font-bold text-base text-secondary medium:text-xl">
                {major.college}
              </h2>
              <SeparatorDot />
              <p className="font-chivo font-bold text-secondary">
                {major.type}
              </p>
              <SeparatorDot />
              <p className="font-chivo font-bold text-secondary">
                {major.grade}
              </p>
            </div>
            <p className="font-chivo font-bold text-secondary">{major.term}</p>
          </div>
        </ExpandableCard>
      ))}
      {openedUnespDialog && (
        <Dialog setOpenedDialog={setOpenedUnespDialog}>
          <UnespDialog />
        </Dialog>
      )}
      {openedAlfredDialog && (
        <Dialog setOpenedDialog={setOpenedAlfredDialog}>
          <AlfredDialog />
        </Dialog>
      )}
    </div>
  );
}

export default Study;
