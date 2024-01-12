import { contacts } from "../helpers/infos";
import { ContactType } from "../helpers/types/types";
import Icon from "./UIComponents/Icon";

function Footer() {
  return (
    <div className="h-64 bg-gradient-to-b from-title-lighter to-30% to-paragraph to-100% flex items-center px-5 medium:px-40">
      <div className="flex flex-1 justify-center">
        <p className="font-chivo text-2xl text-secondary">
          Sinta-se à vontade para
          <br />
          entrar em <span className="text-highlight font-bold">
            contato
          </span>{" "}
          comigo.
          <br />
          Vamos bater um papo!
        </p>
      </div>
      <div id="contact" className="flex flex-1 gap-4 justify-center">
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
