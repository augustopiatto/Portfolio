import { FullDivider } from "../../../dividers";

export const UnespDialog = () => {
  function clickedLink(event: React.MouseEvent) {
    (event.target as HTMLButtonElement).setAttribute("activated", "");
  }

  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="title-font">Graduação em Engenharia de Materiais</h1>
        <h2 className="title-font text-3xl">UNESP Guaratinguetá</h2>
      </div>
      <FullDivider />
      <section className="flex flex-col gap-3 mt-7 text-secondary">
        <p className="text-font">
          <a
            href="https://www.feg.unesp.br/#!/ensino/graduacao/cursos/graduacao-em-engenharia-de-materiais/"
            target="_blank"
            onClick={clickedLink}
          >
            Curso
          </a>{" "}
          lecionado pela UNESP de Guaratinguetá desde 2003. Oferece uma{" "}
          <a
            href="https://www.feg.unesp.br/#!/ensino/graduacao/cursos/graduacao-em-engenharia-de-materiais/matriz-curricular/ingressantes-ate-2022/"
            target="_blank"
            onClick={clickedLink}
          >
            grade curricular
          </a>{" "}
          com foco em pesquisas a partir de seu segundo ano letivo, o que a
          torna renomada entre diversas outras faculdades e universidades do
          país.
        </p>
        <p className="text-font">
          Ingressei em 2013 no curso. Durante o primeiro ano cursei a matéria de
          Programação de Computadores I, com média final de 8.6. Foi meu
          primeiro contato com programação e vi que entendia conceitos que eram
          apresentados ali.
        </p>
        <p className="text-font">
          Nos anos seguintes mantive nota maior que a média da universidade, e
          sem pegar recuperação, enquanto focava em realizar as pesquisas da
          grade de cada ano.
        </p>
        <p className="text-font">
          Em 2015 prestei e passei no Ciência sem Fronteiras, indo em agosto do
          mesmo ano para os Estados Unidos, cursar Materials Engineering na
          universidade Alfred, em Nova Iorque. Cursei matérias referentes ao
          curso de Engenharia do Brasil e algumas adicionais que me chamaram o
          interesse.
        </p>
        <p className="text-font">
          Retornei ao Brasil em maio de 2016 e concluí a faculdade em 2018, com
          um ano após o prazo mínimo, devido ao intercâmbio. Mantive meu foco
          nos estudos, fiz meu TCC relacionado ao tema de Metais e me graduei
          com média de 7.1.
        </p>
      </section>
    </>
  );
};
