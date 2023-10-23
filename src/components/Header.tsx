import FullDivider from "./dividers/FullDivider";

function Header() {
  return (
    <div className="bg-background max-h-20 h-20">
      <div className="flex mx-auto w-10/12 justify-between align-middle py-3">
        <h2 className="font-bebas text-5xl text-title font-bold">AMP</h2>
        <nav className="flex gap-8 [&>a]:font-bebas [&>a]:text-2xl [&>a]:text-title [&>a]:leading-loose [&>a]:font-bold">
          <a>SOBRE</a>
          <a>PROJETOS</a>
          <a>CONTATO</a>
        </nav>
      </div>
      <FullDivider />
    </div>
  );
}

export default Header;
