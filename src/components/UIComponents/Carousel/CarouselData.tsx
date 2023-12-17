import Tag from "../Tag";
import { DataInterface } from "../../../helpers/interfaces/interfaces";
import ExpansionRight from "/svg/expansion-right.svg";

interface CarouselDescription {
  data: DataInterface;
  currentIndex: number;
}

function CarouselDescription({ data, currentIndex }: CarouselDescription) {
  return (
    <div className="flex flex-col justify-around h-40 pb-5 relative">
      <div className="w-full flex mb-5 gap-5 px-10">
        <h2 className="font-bebas text-2xl text-title">Descrição</h2>
        <p className="font-chivo text-xl text-paragraph">
          {data[currentIndex].description}
        </p>
      </div>
      <div className="w-full flex items-center gap-5 px-10">
        <h2 className="font-bebas text-2xl text-title">Tecnologias</h2>
        <div className="flex flex-wrap gap-5">
          {data[currentIndex].technologies.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
      </div>
      <div className="absolute right-3 -bottom-2 h-12 w-12 rounded-full flex justify-center items-center cursor-pointer">
        <img src={ExpansionRight} alt="expansion-right" className="h-4 w-6" />
      </div>
    </div>
  );
}

export default CarouselDescription;
