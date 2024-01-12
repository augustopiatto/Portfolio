import { contacts } from "../helpers/infos";
import { ContactType } from "../helpers/types/types";
import Icon from "./UIComponents/Icon";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-title-lighter to-30% to-paragraph to-100% flex flex-col gap-5 px-5 py-10 medium:px-40 medium:flex-row medium:items-center">
      <div className="flex flex-1 justify-center">
        <p className="font-chivo text-2xl text-secondary">
          Sinta-se à vontade para entrar em{" "}
          <span className="text-highlight font-bold">contato</span> comigo.
          Vamos bater um papo!
        </p>
      </div>
      <div id="contact" className="flex flex-1 flex-wrap gap-4 justify-center">
        {contacts.length &&
          contacts.map((contact: ContactType) => (
            <Icon
              copy={contact?.copy}
              download={contact?.download}
              href={contact.href}
              name={contact.name}
              src={contact.src}
              key={contact.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Footer;
