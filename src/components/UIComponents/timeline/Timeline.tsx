import React from "react";
import { timelines } from "../../../helpers/infos";
import { TimelineType } from "../../../helpers/types/types";

export const Timeline = () => {
  const [currentId, setCurrentId] = React.useState<number>(1);
  const [visibleDates, setVisibleDates] = React.useState<TimelineType[]>([]);

  function changeDate(id: number) {
    setCurrentId(id);
  }

  function rearrengeArray(array: TimelineType[], id: number) {
    const chosenIndex = array.findIndex((item) => item.id === id);
    const distance = chosenIndex - 2;
    array = array
      .slice(distance, array.length)
      .concat(array.slice(0, distance));
    return array;
  }

  React.useEffect(() => {
    const totalItems = timelines.length;
    const divsBeforeAndAfter = 2;

    const startIndex =
      (currentId - divsBeforeAndAfter + totalItems - 1) % totalItems;

    const visibleIndexes = Array.from(
      { length: divsBeforeAndAfter * 2 + 1 },
      (_, i) => ((startIndex + i) % totalItems) + 1
    );
    const visibleTimelines = timelines.filter((timeline) =>
      visibleIndexes.includes(timeline.id)
    );
    const rearrangedList = rearrengeArray(visibleTimelines, currentId);

    setVisibleDates(rearrangedList);
  }, [currentId]);

  return (
    <div className="flex flex-col gap-5">
      <ul className="timeline-line flex justify-between px-20 relative">
        {visibleDates.map((date) => (
          <li
            className="flex flex-col gap-3 items-center text-font"
            key={date.id}
          >
            <h1 className="title-font text-secondary text-2xl">{date.year}</h1>
            <div
              className={`${
                currentId === date.id ? "selected" : ""
              } timeline-circle h-10 w-10 rounded-full border-2 border-highlight cursor-pointer`}
              onClick={() => changeDate(date.id)}
              key={date.id}
            ></div>
          </li>
        ))}
      </ul>
      {!!visibleDates.length && visibleDates[2] && (
        <div className="flex flex-col gap-5 items-center">
          <p className="text-font text-secondary">{visibleDates[2].info}</p>
          <div
            className="timeline-picture rounded-lg shadow-card h-auto w-48 bg-highlight flex justify-center items-end overflow-hidden"
            key={visibleDates[2].picture.alt}
          >
            <img
              src={visibleDates[2].picture.src}
              alt={visibleDates[2].picture.alt}
              className=""
            />
          </div>
        </div>
      )}
    </div>
  );
};
