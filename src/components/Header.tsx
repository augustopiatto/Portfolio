import FullDivider from "./dividers/FullDivider";

function Header() {
  return (
    <div className="bg-background max-h-20 h-20">
      <div className="flex mx-auto w-10/12 justify-between align-middle py-3 px-10">
        <h2 className="font-bebas text-5xl text-title font-bold">AMP</h2>
        <nav className="flex gap-8 [&>a]:font-bebas [&>a]:text-2xl [&>a]:text-title [&>a]:leading-loose [&>a]:font-bold [&>a]:capitalize">
          <a>Sobre</a>
          <a>Projetos</a>
          <a>Contato</a>
        </nav>
      </div>
      <FullDivider />
    </div>
  );
}

export default Header;
