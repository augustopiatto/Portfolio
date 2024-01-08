import React, { ReactNode } from "react";

type WarningContextType = {
  active: boolean;
  activateWarning: (message: string) => void;
  text: string;
};

export const WarningContext = React.createContext<WarningContextType>(
  {} as WarningContextType
);

export const WarningStorage = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>("");
  const [timeoutId, setTimeoutId] = React.useState<NodeJS.Timeout | null>(null);

  async function activateWarning(message: string) {
    if (timeoutId) clearTimeout(timeoutId);
    await setActive(true);
    setText(message);
    const id = setTimeout(() => {
      setActive(false);
    }, 5000);
    setTimeoutId(id);
  }

  return (
    <WarningContext.Provider value={{ active, activateWarning, text }}>
      {children}
    </WarningContext.Provider>
  );
};
