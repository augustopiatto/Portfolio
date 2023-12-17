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
      <div className="flex gap-10 mb-16">
        <div className="flex-1 flex flex-col gap-12">
          <Studies />
          <Languages />
        </div>
        <Courses />
      </div>
    </div>
  );
}

export default Content;
