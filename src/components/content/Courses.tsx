import { courses } from "../../infos";
import { Course } from "../../helpers/types/types.tsx";
import Card from "../cards/Card";
import Tag from "../UIComponents/Tag.tsx";
import Link from "../../assets/svg/link.svg";
import Tooltip from "../UIComponents/Tooltip.tsx";
import React from "react";
import { WarningContext } from "../../contexts/WarningContext.tsx";
import Button from "../HTMLComponents/Button.tsx";
import expansionBottom from "../../assets/svg/expansion-bottom.svg";

function Courses() {
  const [visibleCourses, setVisibleCourses] = React.useState<Course[]>(
    courses.slice(0, 3)
  );

  const { activateWarning } = React.useContext(WarningContext);

  function copyURI(event: React.MouseEvent<HTMLElement>, href: string) {
    event.preventDefault();
    navigator.clipboard.writeText(href);
    activateWarning("Copiado! O link está no CTRL + V");
  }

  function loadCourses() {
    const visibleCoursesNames = visibleCourses.map((course) => {
      return course.name;
    });
    const moreCourses = courses.filter((course) => {
      return !visibleCoursesNames.includes(course.name);
    });
    const loadedCourses = visibleCourses.concat(moreCourses);
    setVisibleCourses(loadedCourses);
  }

  return (
    <div className="flex flex-col flex-1 gap-12">
      {visibleCourses.length &&
        visibleCourses.map((course: Course) => (
          <Card key={course.name}>
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-6">
                <img src={course.institutionSVG} alt={course.institutionSVG} />
                <h1 className="font-bebas text-4xl capitalize">
                  {course.name} - {course.institution}
                </h1>
                <Tooltip>
                  <a
                    href={course.certificationLink}
                    onClick={(event) =>
                      copyURI(event, course.certificationLink)
                    }
                  >
                    <p>Link do curso</p>
                    <img src={Link} alt="course-link" />
                  </a>
                </Tooltip>
              </div>
              <div className="flex gap-5 flex-wrap">
                {course.technologies.length &&
                  course.technologies.map((tech) => (
                    <Tag text={tech} key={tech} />
                  ))}
              </div>
            </div>
          </Card>
        ))}
      {courses.length !== visibleCourses.length && (
        <div className="flex justify-center">
          <Button onClick={() => loadCourses()}>
            <img
              src={expansionBottom}
              alt="expansion-bottom"
              className="h-6 w-8"
            />
          </Button>
        </div>
      )}
    </div>
  );
}

export default Courses;
