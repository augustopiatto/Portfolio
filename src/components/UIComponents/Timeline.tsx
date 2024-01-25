import React from "react";
import { timeline } from "../../helpers/infos";

function Timeline() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(1);
  const [visibleDates, setVisibleDates] = React.useState<number[]>([]);

  function changeDate(id: number) {
    setCurrentIndex(id);
  }

  React.useEffect(() => {
    const totalItems = timeline.length;
    const divsBeforeAndAfter = 2;

    const startIndex =
      (currentIndex - divsBeforeAndAfter + totalItems - 1) % totalItems;

    const visibleIndexes = Array.from(
      { length: divsBeforeAndAfter * 2 + 1 },
      (_, i) => ((startIndex + i) % totalItems) + 1
    );

    setVisibleDates(visibleIndexes);
  }, [currentIndex]);

  return (
    <div className="flex justify-between">
      {timeline.map(
        (date) =>
          visibleDates.includes(date.id) && (
            <div
              className="flex flex-col gap-3 items-center text-secondary font-chivo text-lg"
              key={date.id}
            >
              <h1>{date.id}</h1>
              <div
                className="timeline-circle h-10 w-10 rounded-full border border-highlight cursor-pointer hover:scale-150"
                onClick={() => changeDate(date.id)}
              ></div>
              {currentIndex === date.id && (
                <div className="flex flex-col flex-wrap gap-3 items-center w-48 text-center">
                  <p>{date.info}</p>
                  <div className="rounded-lg shadow-card h-auto w-48 bg-highlight flex justify-center items-end overflow-hidden">
                    <img src="/images/profile.png" alt="teste" />
                  </div>
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
}

export default Timeline;
