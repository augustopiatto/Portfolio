function Header() {
  return (
    <div className="bg-paragraph max-h-20 h-20">
      <div className="flex mx-auto w-10/12 justify-between align-middle py-3 px-10">
        <h2 className="font-bebas text-5xl text-background font-bold">AMP</h2>
        <nav className="flex gap-8 [&>a]:font-bebas [&>a]:text-2xl [&>a]:text-background [&>a]:leading-loose [&>a]:capitalize">
          <a>Sobre</a>
          <a>Projetos</a>
          <a>Contato</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
