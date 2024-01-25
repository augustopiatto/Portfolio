import { scrollToTarget } from "../helpers/helperFunctions";

function Header() {
  return (
    <div className="fixed bg-background border-b border-secondary max-h-20 h-20 max-w-inherit w-full z-50 shadow-xl">
      <div className="flex mx-auto w-10/12 max-w-[1200px] justify-between items-center py-4">
        <h2 className="title-font text-secondary text-3xl medium:text-5xl">
          AMP
        </h2>
        <nav className="flex gap-8 [&>a]:text-secondary [&>a]:capitalize [&>a]:cursor-pointer [&>a]:text-lg hover:[&>a]:scale-105 medium:[&>a]:text-2xl">
          <a className="title-font" onClick={() => scrollToTarget("about", 56)}>
            Sobre
          </a>
          <a
            className="title-font"
            onClick={() => scrollToTarget("projects", 56)}
          >
            Projetos
          </a>
          <a className="title-font" onClick={() => scrollToTarget("contact")}>
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
