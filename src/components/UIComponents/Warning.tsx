import React from "react";
import { WarningContext } from "../../contexts/WarningContext";

function Warning() {
  const { active, coords, text } = React.useContext(WarningContext);
  const warningDiv = document.getElementById("warning-position");
  if (warningDiv) {
    warningDiv.style.left = `${coords.pageX - 30}px`;
    warningDiv.style.top = `${coords.pageY - 100}px`;
  }

  if (!active) return;
  return (
    <div id="warning-position" className="absolute z-10">
      <div className="bg-warning rounded-xl h-8 w-36 flex items-center justify-center">
        <p className="font-bebas text-background text-lg tracking-wide capitalize">
          {text}
        </p>
      </div>
      <div className="ml-5 h-0 w-0 border-x-[10px] border-x-transparent border-t-[16px] border-t-warning"></div>
    </div>
  );
}

export default Warning;
