import React from "react";
import { WarningContext } from "../../contexts/WarningContext";
import Tooltip from "./Tooltip.tsx";

interface Icon {
  copy?: boolean;
  download?: boolean;
  href: string;
  name: string;
  src: string;
  size?: number;
}

function Icon({ copy = false, download = false, href, name, src }: Icon) {
  const { activateWarning } = React.useContext(WarningContext);

  function copyURI(event: React.MouseEvent<HTMLElement>) {
    if (copy) {
      event.preventDefault();
      navigator.clipboard.writeText(href);
      activateWarning("Copiado! O link está no CTRL + V");
    }
  }

  return (
    <Tooltip>
      <a
        className={`bg-secondary rounded-full flex items-center justify-center cursor-pointer h-10 w-10 medium:h-16 medium:w-16`}
        href={href}
        download={download}
        target={copy ? "" : "_blank"}
        onClick={(event) => copyURI(event)}
      >
        <p>{name}</p>
        <img
          src={src}
          alt={name}
          className="h-6 w-6 medium:h-auto medium:w-auto"
        />
      </a>
    </Tooltip>
  );
}

export default Icon;
