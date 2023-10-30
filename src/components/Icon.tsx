import React from "react";
import { WarningContext } from "../contexts/WarningContext";

interface Icon {
  copy?: boolean;
  download?: boolean;
  href: string;
  name: string;
  src: string;
}

function Icon({ copy = false, download = false, href, name, src }: Icon) {
  const { activateWarning } = React.useContext(WarningContext);

  const copyURI = (event: React.MouseEvent<HTMLElement>) => {
    if (copy) {
      event.preventDefault();
      navigator.clipboard.writeText(href);
      activateWarning(event, "Copiado");
    }
  };

  return (
    <a
      className="bg-secondary rounded-full h-20 w-20 flex items-center justify-center"
      href={href}
      download={download}
      target={copy ? "" : "_blank"}
      onClick={copyURI}
    >
      <img src={src} alt={name} />
    </a>
  );
}

export default Icon;
