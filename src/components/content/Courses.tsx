import { courses } from "../../helpers/infos.tsx";
import { CourseType } from "../../helpers/types/types.tsx";
import Card from "../cards/Card";
import Tag from "../UIComponents/Tag.tsx";
import Tooltip from "../UIComponents/Tooltip.tsx";
import Certificate from "/svg/certificate.svg";
import Slider from "../UIComponents/VerticalSlider/Slider.tsx";

function Courses() {
  return (
    <div className="flex max-h-[848px]">
      <Slider>
        {courses.map((course: CourseType) => (
          <Card key={course.id}>
            <div className="flex flex-col gap-7">
              <div className="inline medium:max-w-[calc(100%-80px)]">
                <img
                  src={course.institutionSVG}
                  alt={course.institutionSVG}
                  className="inline"
                />
                <h1 className="title-font inline mx-4 align-bottom">
                  {course.name} - {course.institution}
                </h1>
                <Tooltip>
                  <a
                    href={course.certificateLink}
                    className="text-font cursor-pointer inline-block h-6 w-7"
                    target="_blank"
                  >
                    <p>Certificado</p>
                    <img
                      src={Certificate}
                      alt="course-link"
                      className="hover:scale-[1.2]"
                    />
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
      </Slider>
    </div>
  );
}

export default Courses;
