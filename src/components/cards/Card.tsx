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
      className={`${borderRadius} ${maxWidth} bg-card p-7 relative shadow-card shadow-light-grey`}
    >
      {children}
    </div>
  );
}

export default Card;
