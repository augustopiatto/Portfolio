import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Studies from "./Studies.tsx";
import Courses from "./Courses.tsx";
import PartialDivider from "../dividers/PartialDivider.tsx";
import Languages from "./Languages.tsx";

function Content() {
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
}

export default Content;
