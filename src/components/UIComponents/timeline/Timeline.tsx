import React from "react";
import { timelines } from "../../../helpers/infos";
import { TimelineType } from "../../../helpers/types/types";
import { isScreenSizeSmall } from "../../../helpers/helperFunctions";

export const Timeline = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [visibleDates, setVisibleDates] = React.useState<TimelineType[]>([]);

  function changeDate(id: number) {
    const chosenIndex = timelines.findIndex((item) => item.id === id);
    setCurrentIndex(chosenIndex);
  }

  React.useEffect(() => {
    if (currentIndex < 2) {
      setVisibleDates(timelines.slice(0, 5));
    } else if (currentIndex > timelines.length - 3) {
      setVisibleDates(timelines.slice(timelines.length - 5, timelines.length));
    } else {
      setVisibleDates(timelines.slice(currentIndex - 2, currentIndex + 3));
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col gap-10">
      <ul className="timeline-line flex justify-between relative px-4 medium:px-20">
        {visibleDates.map((date) => (
          <li
            className="flex flex-col gap-3 items-center text-font"
            key={date.id}
          >
            <h3 className="title-font text-secondary text-lg medium:text-2xl">
              {String(date.year).slice(0, 2)}
              <span className="text-xl medium:text-3xl">
                {String(date.year).slice(-2)}
              </span>
              {!!date.month && !isScreenSizeSmall() && (
                <span> - {date.month}</span>
              )}
            </h3>
            <div
              className={`${
                currentIndex + 1 === date.id ? "selected" : ""
              } timeline-circle rounded-full border-2 border-highlight cursor-pointer h-8 w-8 medium:h-14 medium:w-14`}
              onClick={() => changeDate(date.id)}
            ></div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-10 items-center">
        <p className="text-font text-secondary">
          {timelines[currentIndex].info}
        </p>
        <div
          className="timeline-picture rounded-lg shadow-card bg-highlight flex justify-center items-end overflow-hidden"
          key={timelines[currentIndex].picture.alt}
        >
          <img
            src={timelines[currentIndex].picture.src}
            alt={timelines[currentIndex].picture.alt}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
