import React from "react";
import Ornament1 from "/svg/ornament-1.svg";
import { AboutDialog, Dialog } from "../../../components/UIComponents/dialog";
import { ExpandableCard } from "../../../components/cards";
import { Picture } from "../../picture/picture";

export const About = () => {
  const [openedDialog, setOpenedDialog] = React.useState(false);

  const place = "São José dos Campos";

  function openDialog() {
    setOpenedDialog(true);
  }

  return (
    <div
      id="about"
      className="bg-radial-dark-purple-about py-14 flex flex-col items-center gap-10 large:flex-row large:justify-between"
    >
      <ExpandableCard
        borderRadius={"rounded-card"}
        maxWidth={"max-w-screen-md"}
        place={place}
        openDialog={openDialog}
      >
        <div className="flex justify-between">
          <h1 className="title-font">
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
        <p className="text-font my-6">
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
};
