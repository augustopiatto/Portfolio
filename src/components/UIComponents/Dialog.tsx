interface Dialog {
  children: React.ReactNode;
  setOpenedDialog: (value: boolean) => void;
}

function Dialog({ children, setOpenedDialog }: Dialog) {
  function closeDialog() {
    setOpenedDialog(false);
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-2/3 w-2/3 bg-black shadow-focused">
      <button onClick={closeDialog} className="absolute top-3 right-5">
        <span className="text-2xl font-bold">X</span>
      </button>
      {children}
    </div>
  );
}

export default Dialog;
