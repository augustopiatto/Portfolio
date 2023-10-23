import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Study from "./Study.tsx";
import Courses from "./Courses.tsx";

function Content() {
  return (
    <div className="bg-background">
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
