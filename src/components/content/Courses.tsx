import React from "react";
import { courses } from "../../helpers/infos.tsx";
import { CourseType } from "../../helpers/types/types.tsx";
import Card from "../cards/Card";
import Tag from "../UIComponents/Tag.tsx";
import Tooltip from "../UIComponents/Tooltip.tsx";
import { WarningContext } from "../../contexts/WarningContext.tsx";
import Link from "/svg/link.svg";
import Slider from "../UIComponents/VerticalSlider/Slider.tsx";

function Courses() {
  const { activateWarning } = React.useContext(WarningContext);

  function copyURI(event: React.MouseEvent<HTMLElement>, href: string) {
    event.preventDefault();
    navigator.clipboard.writeText(href);
    activateWarning("Copiado! O link está no CTRL + V");
  }

  return (
    <div className="flex max-h-[824px]">
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
                <h1 className="inline ml-4 font-bebas text-2xl capitalize align-bottom medium:text-4xl">
                  {course.name} - {course.institution}
                </h1>
                <Tooltip>
                  <a
                    href={course.certificationLink}
                    className="ml-4 align-center cursor-pointer inline-block h-6 w-7"
                    onClick={(event) =>
                      copyURI(event, course.certificationLink)
                    }
                  >
                    <p>Link do curso</p>
                    <img
                      src={Link}
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
