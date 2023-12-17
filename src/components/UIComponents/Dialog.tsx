interface Dialog {
  children: React.ReactNode;
  setOpenedDialog: (value: boolean) => void;
}

function Dialog({ children, setOpenedDialog }: Dialog) {
  function closeDialog() {
    setOpenedDialog(false);
  }

  return (
    <div className="fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card w-2/3 rounded-dialog p-10">
        <button onClick={closeDialog} className="absolute top-5 right-9">
          <span className="text-2xl font-bold">X</span>
        </button>
        {children}
      </div>
    </div>
  );
}

export default Dialog;
