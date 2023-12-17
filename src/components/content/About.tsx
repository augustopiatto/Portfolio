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
      {openedDialog && <Dialog setOpenedDialog={setOpenedDialog}>Oi</Dialog>}
    </div>
  );
}

export default About;
