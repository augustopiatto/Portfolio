import React from "react";
import { WarningContext } from "../../contexts/WarningContext";

function Warning() {
  const { active, text } = React.useContext(WarningContext);

  if (!active) return;
  return (
    <div
      id="warning-position"
      className="fixed top-[60%] left-[50%] ml-[180px] z-10"
    >
      <div
        id="warning-position"
        className="bg-paragraph rounded-tl-[30px] h-[100px] w-[540px] p-[10px] relative flex items-center justify-center"
      >
        <div className="rounded-tl-[30px] h-20 w-[200px] border-solid border-t-[5px] border-l-[5px] border-success absolute left-[10px]"></div>
        <p className="font-bebas text-background text-4xl tracking-wide capitalize whitespace-nowrap">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Warning;
