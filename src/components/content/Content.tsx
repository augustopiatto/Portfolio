import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Study from "./Study.tsx";
import Courses from "./Courses.tsx";
import PartialDivider from "../dividers/PartialDivider.tsx";

function Content() {
  return (
    <div className="flex flex-col">
      <About />
      <PartialDivider />
      <Projects />
      <PartialDivider />
      <div>
        <Study />
        <Courses />
      </div>
    </div>
  );
}

export default Content;
