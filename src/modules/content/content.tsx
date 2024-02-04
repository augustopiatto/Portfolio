import { PartialDivider } from "../../components/dividers/index.tsx";
import { About, Courses, Studies } from "./index.tsx";
import { Languages } from "./languages/languages.tsx";
import { Projects } from "./projects/projects.tsx";

export const Content = () => {
  return (
    <div className="flex flex-col">
      <About />
      <PartialDivider />
      <Projects />
      <PartialDivider />
      <div className="bg-radial-dark-purple-study py-14 flex flex-col gap-10 mx-auto mb-16 large:flex-row">
        <div className="flex flex-col gap-12 large:flex-1">
          <Studies />
          <Languages />
        </div>
        <div className="large:flex-1">
          <Courses />
        </div>
      </div>
    </div>
  );
};
