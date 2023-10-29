interface Icon {
  link: string;
  name: string;
  svg: string;
}

function Icon({ link, name, svg }: Icon) {
  return (
    <a
      className="bg-secondary rounded-full h-20 w-20 flex items-center justify-center"
      href={link}
    >
      <img src={svg} alt={name} />
    </a>
  );
}

export default Icon;
