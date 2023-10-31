import { courses } from "../../infos";
import { Course } from "../../helpers/types/types.tsx";
import Card from "../cards/Card";
import Tag from "../UIComponents/Tag.tsx";
import Link from "../../assets/svg/link.svg";
import Tooltip from "../UIComponents/Tooltip.tsx";

function Courses() {
  return (
    <div className="flex flex-col flex-1 gap-12">
      {courses.length &&
        courses.map((course: Course) => (
          <Card key={course.name}>
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-6">
                <img src={course.institutionSVG} alt={course.institutionSVG} />
                <h1 className="font-bebas text-4xl capitalize">
                  {course.name} - {course.institution}
                </h1>
                <Tooltip>
                  <a href={course.certificationLink}>
                    <p>Link do curso</p>
                    <img src={Link} alt="course-link" />
                  </a>
                </Tooltip>
              </div>
              <div className="flex gap-5">
                {course.technologies.length &&
                  course.technologies.map((tech) => (
                    <Tag text={tech} key={tech} />
                  ))}
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}

export default Courses;
