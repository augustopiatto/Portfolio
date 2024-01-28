import { isScreenSizeSmall } from "../../../helpers/helperFunctions";

interface Tag {
  text: string;
  small?: boolean;
}

export const Tag = ({ text, small }: Tag) => {
  const smallClass = "text-xs px-2 py-0.5 rounded-md";

  return (
    <div
      className={`${
        isScreenSizeSmall() || small
          ? smallClass
          : "text-sm px-2.5 py-1.5 rounded-lg"
      } bg-tag tag-font`}
    >
      {text}
    </div>
  );
};
