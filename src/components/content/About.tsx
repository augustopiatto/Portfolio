import React from "react";
import ExpandableCard from "../cards/ExpandableCard";
import Picture from "../cards/Picture";
import Ornament1 from "/svg/ornament-1.svg";
import Dialog from "../UIComponents/Dialog";

function About() {
  const [openedDialog, setOpenedDialog] = React.useState(false);

  const place = "São José dos Campos";

  function openDialog() {
    setOpenedDialog(true);
  }

  return (
    <div className="flex justify-between mt-14">
      <ExpandableCard
        borderRadius={"rounded-card"}
        maxWidth={"max-w-screen-sm"}
        place={place}
        openDialog={openDialog}
      >
        <div className="flex">
          <h1 className="font-bebas text-4xl capitalize leading-tight">
            Olá! Bem-vindo(a) <br />
            Sou <span className="text-highlight">Augusto</span>, desenvolvedor
            web full stack
          </h1>
          <img src={Ornament1} alt="ornament1" className="h-14 w-24 mt-3" />
        </div>
        <p className="font-chivo text-paragraph text-base my-6">
          Tenho 2 anos de experiência como full stack e venho aprimorando minhas
          habilidades de front end. Em meus projetos, meu principal foco é a
          experiência do usuário e sua interação com o sistema.
        </p>
      </ExpandableCard>
      <Picture />
      {openedDialog && (
        <Dialog setOpenedDialog={setOpenedDialog}>
          <h1>Sobre o Augusto</h1>
          <section>
            {/* Falar mais sobre gostar de matematica, fazer ensino tecnico */}
            <p>
              Sou Augusto, tenho 28 anos, sou formado em Engenharia de Materiais
              e fiz um intercâmbio de 1 ano nos Estados Unidos durante a
              faculdade.
            </p>
            <p>
              Trabalhei em engenharia por 1 ano, em uma aciaria, coletando dados
              da operação e fazendo análises e melhorias do processo em cima
              desses dados.
            </p>
            <p>
              Migrei para a parte de desenvolvimento em 2021, através de um
              bootcamp concursado da Buser Brasil. Desde então trabalhei por 2
              anos como desenvolvedor fullstack na empresa, e saí em 2023.
            </p>
            {/* Falar mais sobre o eu não profissional, o que faço no tempo livre */}
            <p>
              Sou uma pessoa que gosta bastante de se movimentar, por isso meus
              hobbies favoritos são vôlei e viajar, gosto também de cuidar das
              minhas plantas de casa e de cozinhar, principalmente para tomar um
              café da tarde com minha namorada.
            </p>
          </section>
        </Dialog>
      )}
    </div>
  );
}

export default About;
