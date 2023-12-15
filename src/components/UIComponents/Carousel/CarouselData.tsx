import Tag from "../Tag";
import { DataInterface } from "../../../helpers/interfaces/interfaces";

interface CarouselDescription {
  data: DataInterface;
  currentIndex: number;
}

function CarouselDescription({ data, currentIndex }: CarouselDescription) {
  return (
    <div className="flex flex-col justify-around h-36">
      <div className="w-full flex items-center mb-5 gap-5 pl-10">
        <h2 className="font-bebas text-2xl text-title">Descrição</h2>
        <p className="font-chivo text-xl text-paragraph">
          {data[currentIndex].description}
        </p>
      </div>
      <div className="w-full flex items-center gap-5 pl-10">
        <h2 className="font-bebas text-2xl text-title">Tecnologias</h2>
        <div className="flex flex-wrap gap-5">
          {data[currentIndex].technologies.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselDescription;
