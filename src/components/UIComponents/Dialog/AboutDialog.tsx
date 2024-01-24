import FullDivider from "../../dividers/FullDivider";
import Timeline from "../Timeline";

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
          <Timeline />
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
