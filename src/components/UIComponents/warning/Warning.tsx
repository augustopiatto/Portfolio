import React from "react";
import { WarningContext } from "../../../contexts/WarningContext";

export const Warning = () => {
  const { active, text } = React.useContext(WarningContext);

  if (!active) return;
  return (
    <div id="warning-position" className="fixed top-[15%] right-[2%] z-40">
      <div className="bg-warning rounded-tl-[30px] rounded-br-[30px] h-[100px] p-[10px] relative flex items-center justify-center w-auto medium:w-[540px]">
        <div className="rounded-tl-[30px] h-20 w-[200px] border-solid border-t-[5px] border-l-[5px] border-success absolute left-[10px]"></div>
        <p className="title-font text-secondary ml-5 tracking-wide whitespace-nowrap">
          {text}
        </p>
      </div>
    </div>
  );
};
