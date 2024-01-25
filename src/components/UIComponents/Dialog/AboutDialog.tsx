import FullDivider from "../../dividers/FullDivider";
// import Timeline from "../Timeline";

function AboutDialog() {
  const birthDate = new Date("1995-05-27T00:00:00");
  const today = new Date();
  const dateDiff = today.getTime() - birthDate.getTime();
  const diffInYears = dateDiff / (1000 * 60 * 60 * 24 * 365.25);
  const age = Math.floor(diffInYears);

  return (
    <>
      <div>
        <h1 className="font-bebas text-4xl text-title uppercase leading-tight">
          Sobre o Augusto
        </h1>
        <FullDivider />
        <section className="my-7">
          <p className="mb-10 text-secondary font-chivo text-lg">
            Tenho {age} anos, sempre gostei de exatas e por esse motivo decidi
            seguir para essa área durante meus estudos
          </p>
          {/* temporário enquanto não faço a timeline */}
          <ul className="text-secondary font-chivo text-lg list-disc pl-5">
            <li>
              2010 - Fiz curso técnico em manutenção automotiva na ETEC e a
              partir disso decidi ingressar em engenharia para a faculdade
            </li>
            <li>
              2013 - Ingressei em Engenharia de Materiais na UNESP em 2013
            </li>
            <li>
              2015 - Fiz intercâmbio de 1 ano nos Estados Unidos através do
              programa Ciência sem Fronteiras
            </li>
            <li>
              2017 - Estagiei na área por um ano, mas mexendo principalmente com
              Excel e VBA
            </li>
            <li>2021 - Comecei bootcamp de programação na Buser Brasil</li>
            <li>
              2021 - Entrei como desenvolvedor full stack júnior na Buser Brasil
            </li>
            <li>
              2023 - Saída da Buser Brasil e começo de estudo focado em Front
            </li>
          </ul>
          {/* <Timeline /> */}
        </section>
        <FullDivider marginBottom="mb-7" marginTop="mt-5" />
        <section className="text-secondary font-chivo text-lg">
          <h2 className="mb-3 font-bebas text-3xl text-title uppercase">
            Lazer
          </h2>
          <p>
            Quando fiz estágio precisei mudar de cidade, e acabei gostando
            bastante de onde fiquei, São José dos Campos. Moro aqui até hoje. A
            cidade é tranquila, arborizada, perto de São Paulo e perto da praia,
            muito bem localizada. Aqui fiz grandes amizades e pretendo continuar
            morando aqui por mais alguns anos.
          </p>
          <p>
            Sou uma pessoa que gosta bastante de se movimentar, e isso explica a
            razão dos meus hobbies favoritos serem jogar vôlei e viajar, eu
            também sempre tive contato com a natureza e gosto disso. Em casa
            tenho algumas plantas que cuido, entre elas, algumas que uso de
            tempero para cozinhar, que é outra paixão que tenho.
          </p>
        </section>
      </div>
    </>
  );
}

export default AboutDialog;
