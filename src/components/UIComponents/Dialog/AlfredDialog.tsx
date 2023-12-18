import FullDivider from "../../dividers/FullDivider";

function AlfredDialog() {
  function clickedLink(event: React.MouseEvent) {
    (event.target as HTMLButtonElement).setAttribute("activated", "");
  }

  return (
    <>
      <div>
        <h1 className="font-bebas text-4xl uppercase leading-tight">
          Graduação Sanduíche em Materials Engineering
        </h1>
      </div>
      <FullDivider />
      <section className="flex flex-col gap-3 mt-7 [&>p]:font-chivo [&>p]:text-lg">
        <p>
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
        <p>
          Ingressei em 2013 no curso. Durante o primeiro ano cursei a matéria de
          Programação de Computadores I, com média final de 8.6. Foi meu
          primeiro contato com programação e vi que entendia conceitos que eram
          apresentados ali.
        </p>
        <p>
          Nos anos seguintes mantive nota maior que a média da universidade, e
          sem pegar recuperação, enquanto focava em realizar as pesquisas da
          grade de cada ano.
        </p>
        <p>
          Em 2015 prestei e passei no Ciência sem Fronteiras, indo em agosto do
          mesmo ano para os Estados Unidos, cursar Materials Engineering na
          universidade Alfred, em Nova Iorque. Cursei matérias referentes ao
          curso de Engenharia do Brasil e algumas adicionais que me chamaram o
          interesse.
        </p>
        <p>
          Retornei ao Brasil em maio de 2016 e concluí a faculdade em 2018, com
          um ano após o prazo mínimo, devido ao intercâmbio. Mantive meu foco
          nos estudos, fiz meu TCC relacionado ao tema de Metais e me graduei
          com média de 7.1.
        </p>
      </section>
    </>
  );
}

export default AlfredDialog;
