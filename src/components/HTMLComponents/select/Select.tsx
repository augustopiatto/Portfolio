import React from "react";

export interface SelectInterface {
  items: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

// Montei select próprio porque o nativo do HTML não deixa controlar tamanho do dropdown
export const Select = ({ items, placeholder, onChange }: SelectInterface) => {
  const [openedDropdown, setOpenedDropdown] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<string>("");

  function closeDropdown() {
    const arrowDown = document.getElementById("arrow-down");
    arrowDown?.removeAttribute("opened");
    setOpenedDropdown(false);
  }

  function toggleDropdown() {
    const arrowDown = document.getElementById("arrow-down");
    if (openedDropdown) {
      arrowDown?.removeAttribute("opened");
    } else {
      arrowDown?.setAttribute("opened", "");
    }
    setOpenedDropdown(!openedDropdown);
  }

  function selectValue(value: string) {
    setSelectedItem(value);
    onChange(value);
    closeDropdown();
  }

  function deleteValue() {
    setSelectedItem("");
    onChange("");
  }

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        openedDropdown &&
        !document
          .getElementById("dropdown-wrapper")
          ?.contains(event.target as HTMLButtonElement) &&
        !document
          .getElementById("dropdown")
          ?.contains(event.target as HTMLButtonElement)
      ) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [openedDropdown]);

  return (
    <div className="flex">
      <div className="w-full relative">
        <input
          id="dropdown-wrapper"
          type="text"
          readOnly
          placeholder={selectedItem ? selectedItem : placeholder}
          className="input-icon w-full h-10 pl-12 pr-3 border-[1px] rounded-md border-black bg-secondary text-font text-base"
          onClick={toggleDropdown}
        />
        {selectedItem && (
          <div
            onClick={() => deleteValue()}
            className="absolute top-2 right-10 font-bold cursor-pointer"
          >
            X
          </div>
        )}
        <div id="arrow-down" />
        {openedDropdown && (
          <div
            id="dropdown"
            className="absolute max-h-[300px] w-full z-30 border-[1px] border-black rounded-b-md flex flex-col overflow-y-auto"
          >
            {items.map((item) => (
              <div
                className="bg-secondary py-1 px-2 text-font text-dark-blue text-l border-[1px] border-gray cursor-pointer hover:bg-title"
                key={item}
                onClick={() => selectValue(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
