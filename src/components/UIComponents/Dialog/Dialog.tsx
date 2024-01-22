import React from "react";
import Ornament2 from "/svg/ornament-2.svg";

interface Dialog {
  children: React.ReactNode;
  setOpenedDialog: (value: boolean) => void;
}

function Dialog({ children, setOpenedDialog }: Dialog) {
  const dialogRef = React.useRef<HTMLInputElement>(null);

  // Esse vídeo explica bem como fazer o fade-out a partir de um display none
  // https://www.youtube.com/watch?v=4prVdA7_6u0
  const closeDialog = React.useCallback(() => {
    const dialog = document.getElementById("dialog");
    dialog?.setAttribute("closing", "");
    dialog?.addEventListener(
      "animationend",
      () => {
        dialog?.removeAttribute("closing");
        setOpenedDialog(false);
      },
      { once: true }
    );
  }, [setOpenedDialog]);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        closeDialog();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDialog]);

  React.useEffect(() => {
    function escFunction(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDialog();
      }
    }
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [closeDialog]);

  return (
    <div
      id="dialog"
      className="fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50 animate-fade-in"
    >
      <div
        id="dialog-parent-div"
        ref={dialogRef}
        className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card-background w-2/3 rounded-dialog max-h-[90%] overflow-auto pt-24 pb-10 px-10 medium:px-20"
      >
        <button onClick={closeDialog} className="absolute top-5 right-9">
          <span className="text-2xl font-bold text-highlight">X</span>
        </button>
        {children}
        <img
          src={Ornament2}
          alt="ornament2"
          className="rotate-[-10deg] pt-10"
        />
      </div>
    </div>
  );
}

export default Dialog;
