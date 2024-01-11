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
        className={`bg-secondary rounded-full h-20 w-20 flex items-center justify-center cursor-pointer`}
        href={href}
        download={download}
        target={copy ? "" : "_blank"}
        onClick={(event) => copyURI(event)}
      >
        <p>{name}</p>
        <img src={src} alt={name} />
      </a>
    </Tooltip>
  );
}

export default Icon;
