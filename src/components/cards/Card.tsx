import React from "react";

interface Card {
  borderRadius?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

function Card({
  borderRadius = "rounded-3xl",
  children,
  maxWidth = "max-w-screen-lg",
}: Card) {
  return (
    <div
      className={`${borderRadius} ${maxWidth} bg-card-background p-7 relative shadow-card`}
    >
      {children}
    </div>
  );
}

export default Card;
