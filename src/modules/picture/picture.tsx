import React from "react";

export const Picture = () => {
  const [showFirstImage, setShowFirstImage] = React.useState<boolean>(false);
  const [showSecondImage, setShowSecondImage] = React.useState<boolean>(false);

  return (
    <div className="rounded-large shadow-card h-auto max-w-screen-md min-w-[320px] bg-highlight flex justify-center items-end overflow-hidden relative w-full large:w-80">
      <div
        className="absolute top-0 left-0 h-full w-1/3 z-10"
        onMouseEnter={() => setShowFirstImage(true)}
        onMouseLeave={() => setShowFirstImage(false)}
      />
      <img
        src="/images/profile.png"
        alt="profile"
        className={`${
          showFirstImage ? "active-picture" : "inactive-picture"
        } teste1 absolute top-0 left-0 max-h-[95%]`}
      />
      <img
        src="/images/profile.png"
        alt="profile"
        className={`${
          showFirstImage || showSecondImage
            ? "inactive-picture"
            : "active-picture"
        } max-h-[95%]`}
      />
      <img
        src="/images/profile.png"
        alt="profile"
        className={`${
          showSecondImage ? "active-picture" : "inactive-picture"
        } teste2 absolute top-0 left-0 max-h-[95%]`}
      />
      <div
        className="absolute top-0 right-0 h-full w-1/3 z-10"
        onMouseEnter={() => setShowSecondImage(true)}
        onMouseLeave={() => setShowSecondImage(false)}
      />
    </div>
  );
};
