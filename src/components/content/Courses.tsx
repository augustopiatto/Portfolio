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
    <div className="flex flex-1 max-h-[824px]">
      <Slider>
        {courses.map((course: CourseType) => (
          <Card key={course.id}>
            <div className="flex flex-col gap-7">
              <div className="flex items-start gap-6 max-w-[calc(100%-80px)]">
                <img src={course.institutionSVG} alt={course.institutionSVG} />
                <h1 className="font-bebas text-4xl capitalize">
                  {course.name} - {course.institution}
                </h1>
                <Tooltip>
                  <a
                    href={course.certificationLink}
                    className="cursor-pointer h-6 w-7 block"
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
