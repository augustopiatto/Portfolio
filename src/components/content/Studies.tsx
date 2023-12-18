import ExpandableCard from "../cards/ExpandableCard.tsx";
import { majors } from "../../helpers/infos.tsx";
import { Major } from "../../helpers/types/types.tsx";
import SeparatorDot from "../dividers/SeparatorDot.tsx";
import React from "react";
import Dialog from "../UIComponents/Dialog/Dialog.tsx";
import UnespDialog from "../UIComponents/Dialog/UnespDialog.tsx";
import AlfredDialog from "../UIComponents/Dialog/AlfredDialog.tsx";

function Study() {
  const [openedDialog, setOpenedDialog] = React.useState(false);

  function openDialog() {
    setOpenedDialog(true);
  }

  if (!majors.length) return;
  return (
    <div className="flex flex-col gap-12">
      {majors.map((major: Major) => (
        <ExpandableCard
          borderRadius={"rounded-ordinary-expansion"}
          place={major.location}
          key={major.id}
          openDialog={openDialog}
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-bebas text-4xl capitalize">{major.name}</h1>
            <div className="flex justify-between items-center">
              <h2 className="font-chivo font-bold text-xl">{major.college}</h2>
              <SeparatorDot />
              <p className="font-chivo font-bold text-paragraph">
                {major.type}
              </p>
              <SeparatorDot />
              <p className="font-chivo font-bold text-paragraph">
                {major.grade}
              </p>
            </div>
            <p className="font-chivo font-bold text-paragraph">{major.term}</p>
          </div>
        </ExpandableCard>
      ))}
      <Dialog openedDialog={openedDialog} setOpenedDialog={setOpenedDialog}>
        <UnespDialog />
      </Dialog>
      <Dialog openedDialog={openedDialog} setOpenedDialog={setOpenedDialog}>
        <AlfredDialog />
      </Dialog>
    </div>
  );
}

export default Study;
