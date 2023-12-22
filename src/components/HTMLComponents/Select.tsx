import React from "react";
import Button from "./Button";

interface SelectInterface {
  items: string[];
  placeholder: string;
  onClick: React.MouseEventHandler;
}

// Montei select próprio porque o nativo do HTML não deixa controlar tamanho do dropdown
function Select({ items, placeholder, onClick }: SelectInterface) {
  const [openedDropdown, setOpenedDropdown] = React.useState<boolean>(false);

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
        const arrowDown = document.getElementById("arrow-down");
        arrowDown?.removeAttribute("opened");
        setOpenedDropdown(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [openedDropdown]);

  function toggleDropdown() {
    const arrowDown = document.getElementById("arrow-down");
    if (openedDropdown) {
      arrowDown?.removeAttribute("opened");
    } else {
      arrowDown?.setAttribute("opened", "");
    }
    setOpenedDropdown(!openedDropdown);
  }

  return (
    <div className="flex">
      <Button secondary onClick={onClick}>
        <img src="/svg/search.svg" alt="search" />
      </Button>
      <div className="w-full relative">
        <input
          id="dropdown-wrapper"
          type="text"
          readOnly
          placeholder={placeholder}
          className="w-full h-full max-h-10 px-3 border-r-[1px] border-y-[1px] rounded-r-md border-black"
          onClick={toggleDropdown}
        />
        <div id="arrow-down" />
        {openedDropdown && (
          <div
            id="dropdown"
            className="absolute max-h-[300px] w-full z-30 border-[1px] border-black rounded-b-md flex flex-col overflow-y-auto"
          >
            {items.map((item) => (
              <div
                className="bg-white py-1 px-2 font-chivo text-title text-l border-[1px] border-gray cursor-pointer hover:bg-highlight"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
