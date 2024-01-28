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
    <div className="flex justify-between">
      {visibleDates.map((date) => (
        <div
          className="flex flex-col gap-3 items-center text-secondary text-font"
          key={date.id}
        >
          <h1 className="title-font text-2xl text-secondary">{date.year}</h1>
          <div
            className="timeline-circle h-10 w-10 rounded-full border-2 border-highlight cursor-pointer transition ease-in-out duration-500 hover:scale-125"
            onClick={() => changeDate(date.id)}
          ></div>
          {currentId === date.id && (
            <div className="flex flex-col flex-wrap gap-3 items-center w-48 text-center">
              <p>{date.info}</p>
              <div className="rounded-lg shadow-card h-auto w-48 bg-highlight flex justify-center items-end overflow-hidden">
                <img src="/images/profile.png" alt="teste" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};