interface Dialog {
  children: React.ReactNode;
  openedDialog: boolean;
  setOpenedDialog: (value: boolean) => void;
}

function Dialog({ children, openedDialog, setOpenedDialog }: Dialog) {
  // Esse vídeo explica bem como fazer o fade-out a partir de um display none
  // https://www.youtube.com/watch?v=4prVdA7_6u0
  function closeDialog() {
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
  }

  if (!openedDialog) return;
  return (
    <div
      id="dialog"
      className="fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50 animate-fade-in"
    >
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card w-2/3 rounded-dialog p-14">
        <button onClick={closeDialog} className="absolute top-5 right-9">
          <span className="text-2xl font-bold text-primary">X</span>
        </button>
        {children}
        <div className="relative bottom-0 left-0 mt-16 h-2 w-[300px] rounded-full bg-highlight" />
      </div>
    </div>
  );
}

export default Dialog;
