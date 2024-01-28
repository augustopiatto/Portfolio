import React from "react";

interface CardInterface {
  borderRadius?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Card = ({
  borderRadius = "rounded-3xl",
  children,
  maxWidth = "max-w-screen-lg",
}: CardInterface) => {
  return (
    <div
      className={`${borderRadius} ${maxWidth} bg-card-background p-7 relative shadow-card`}
    >
      {children}
    </div>
  );
};
