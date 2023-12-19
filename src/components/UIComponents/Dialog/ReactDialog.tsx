import FullDivider from "../../dividers/FullDivider";
import Icon from "../Icon";

function ReactDialog() {
  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="font-bebas text-4xl uppercase leading-tight">
          React - Origamid
        </h1>
        <div className="mb-2 pr-10">
          <Icon
            href="https://github.com/augustopiatto/Origamid-React"
            name="React"
            src="/svg/github.svg"
            size={10}
          />
        </div>
      </div>
      <FullDivider />
      <section className="flex flex-col gap-3 mt-7 [&>p]:font-chivo [&>p]:text-lg">
        <p></p>
      </section>
    </>
  );
}

export default ReactDialog;
