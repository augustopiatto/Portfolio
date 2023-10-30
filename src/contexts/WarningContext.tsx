import React, { ReactNode } from "react";

interface Coords {
  pageX: number;
  pageY: number;
}

type WarningContextType = {
  active: boolean;
  activateWarning: (
    event: React.MouseEvent<HTMLElement>,
    message: string
  ) => void;
  coords: Coords;
  text: string;
};

export const WarningContext = React.createContext<WarningContextType>(
  {} as WarningContextType
);

export const WarningStorage = ({ children }: { children: ReactNode[] }) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>("");
  const [coords, setCoords] = React.useState<Coords>({ pageX: 0, pageY: 0 });
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

  async function activateWarning(
    event: React.MouseEvent<HTMLElement>,
    message: string
  ) {
    if (timeoutId) clearTimeout(timeoutId);
    await setActive(true);
    setText(message);
    setCoords({
      pageX: event.pageX,
      pageY: event.pageY,
    });
    const id = setTimeout(() => {
      setActive(false);
    }, 3000);
    setTimeoutId(id);
  }

  return (
    <WarningContext.Provider value={{ active, activateWarning, coords, text }}>
      {children}
    </WarningContext.Provider>
  );
};
