import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Study from "./Study.tsx";
import Courses from "./Courses.tsx";

function Content() {
  return (
    <div className="flex flex-col">
      <About />
      <Projects />
      <div>
        <Study />
        <Courses />
      </div>
    </div>
  );
}

export default Content;
