import React from "react";
import { courses } from "../../helpers/infos.tsx";
import { CourseType } from "../../helpers/types/types.tsx";
import Card from "../cards/Card";
import Tag from "../UIComponents/Tag.tsx";
import Tooltip from "../UIComponents/Tooltip.tsx";
import { WarningContext } from "../../contexts/WarningContext.tsx";
import Button from "../HTMLComponents/Button.tsx";
import Link from "/svg/link.svg";
import expansionBottom from "/svg/expansion-bottom.svg";

function Courses() {
  const [visibleCourses, setVisibleCourses] = React.useState<CourseType[]>(
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
    const loadedCourses = visibleCourses.concat(moreCourses.slice(0, 3));
    setVisibleCourses(loadedCourses);
  }

  if (!visibleCourses.length) return;
  return (
    <div className="flex flex-col flex-1 gap-12">
      {visibleCourses.map((course: CourseType) => (
        <Card key={course.id}>
          <div className="flex flex-col gap-7">
            <div className="flex items-start gap-6">
              <img src={course.institutionSVG} alt={course.institutionSVG} />
              <h1 className="font-bebas text-4xl capitalize">
                {course.name} - {course.institution}
              </h1>
              <Tooltip>
                <a
                  href={course.certificationLink}
                  className="cursor-pointer"
                  onClick={(event) => copyURI(event, course.certificationLink)}
                >
                  <p>Link do curso</p>
                  <img src={Link} alt="course-link" className="h-6 w-7" />
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
