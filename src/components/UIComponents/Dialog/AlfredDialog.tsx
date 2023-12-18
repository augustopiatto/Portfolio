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
            href="https://www.alfred.edu/academics/graduate-programs/materials-science-engineering.cfm"
            target="_blank"
            onClick={clickedLink}
          >
            Curso
          </a>{" "}
          lecionado pela Alfred University, no vilarejo de Alfred. Oferece como
          foco do curso o estudo em cerâmicas e vidros, sendo particularmente
          famoso por seus alunos serem direcionados à grande indústria de vidros
          presente em Buffalo, Nova Iorque.
        </p>
        <p>
          Ingressei em agosto de 2015 no curso, com algumas matérias
          equivalentes ao curso de Engenharia de Materiais do Brasil. Me
          inscrevi também em matérias de cerâmicas e vidros, que atraíram minha
          atenção durante meu segundo ano de faculdade no Brasil, além de aulas
          de software de modelagem 3D e inglês.
        </p>
        <p>
          O intercâmbio foi patrocinado pelo programa Ciência sem Fronteiras do
          governo brasileiro e eu concluí o meu ano letivo em maio de 2016, com
          GPA de 3.2, algo similar à média 8.0. Consegui extender o intercâmbio
          realizando um pesquisa subsequente em Chicago, Illinois, até julho,
          retornando ao Brasil após 11 meses de intercâmbio.
        </p>
      </section>
    </>
  );
}

export default AlfredDialog;
