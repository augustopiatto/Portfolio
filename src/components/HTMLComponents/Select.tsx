import React from "react";
import Button from "./Button";

interface SelectInterface {
  items: string[];
  placeholder: string;
  onClick: React.MouseEventHandler;
}

function Select({ items, placeholder, onClick }: SelectInterface) {
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false);

  function openDropDown() {
    setOpenDropdown(!openDropdown);
  }

  return (
    <div className="flex">
      <Button secondary onClick={onClick}>
        <img src="/svg/search.svg" alt="search" />
      </Button>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3 border-r-[1px] border-y-[1px] rounded-r-md border-black overflow-y-visible"
        onClick={openDropDown}
      />
      {openDropdown && (
        <div className="relative top-0 left-0 flex flex-col">
          {items.map((item) => (
            <div className="bg-secondary top-10 left-0">{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
