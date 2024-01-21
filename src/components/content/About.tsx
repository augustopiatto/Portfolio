import React from "react";
import ExpandableCard from "../cards/ExpandableCard";
import Picture from "../cards/Picture";
import Ornament1 from "/svg/ornament-1.svg";
import Dialog from "../UIComponents/Dialog/Dialog";
import AboutDialog from "../UIComponents/Dialog/AboutDialog";

function About() {
  const [openedDialog, setOpenedDialog] = React.useState(false);

  const place = "São José dos Campos";

  function openDialog() {
    setOpenedDialog(true);
  }

  return (
    <div
      id="about"
      className="mt-14 flex flex-col items-center gap-10 large:flex-row large:justify-between"
    >
      <ExpandableCard
        borderRadius={"rounded-card"}
        maxWidth={"max-w-screen-md"}
        place={place}
        openDialog={openDialog}
      >
        <div className="flex justify-between">
          <h1 className="font-bebas capitalize leading-tight text-2xl medium:text-4xl">
            Olá! Bem-vindo(a) <br />
            Sou <span className="text-highlight">Augusto</span>, desenvolvedor
            web full stack
          </h1>
          <img
            src={Ornament1}
            alt="ornament1"
            className="mt-3 h-10 w-14 medium:h-12 medium:w-20 large:h-14 large:w-24"
          />
        </div>
        <p className="font-chivo text-paragraph my-6 text-base">
          Tenho 2 anos de experiência como full stack e venho aprimorando minhas
          habilidades de front end. Em meus projetos, meu principal foco é a
          experiência do usuário e sua interação com o sistema.
        </p>
      </ExpandableCard>
      <Picture />
      {openedDialog && (
        <Dialog setOpenedDialog={setOpenedDialog}>
          <AboutDialog />
        </Dialog>
      )}
    </div>
  );
}

export default About;
