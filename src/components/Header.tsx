import { scrollToTarget } from "../helpers/helperFunctions";

function Header() {
  return (
    <div className="fixed bg-2 border-b border-secondary max-h-20 h-20 max-w-inherit w-full z-50 shadow-xl">
      <div className="flex mx-auto w-10/12 max-w-[1200px] justify-between items-center py-4">
        <h2 className="font-bebas text-background font-bold text-3xl medium:text-5xl">
          AMP
        </h2>
        <nav className="flex gap-8 [&>a]:font-bebas [&>a]:text-background [&>a]:leading-loose [&>a]:capitalize [&>a]:cursor-pointer [&>a]:text-lg medium:[&>a]:text-2xl">
          <a onClick={() => scrollToTarget("about")}>Sobre</a>
          <a onClick={() => scrollToTarget("projects")}>Projetos</a>
          <a onClick={() => scrollToTarget("contact")}>Contato</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
