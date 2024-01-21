import { contacts } from "../helpers/infos";
import { ContactType } from "../helpers/types/types";
import Icon from "./UIComponents/Icon";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-title-lighter to-30% to-paragraph to-100% flex justify-center">
      <div className="w-10/12 max-w-[1200px] flex flex-col gap-5 py-20 medium:flex-row medium:items-center">
        <div className="flex flex-1 justify-center">
          <p className="font-chivo text-secondary text-lg medium:text-2xl">
            Sinta-se à vontade para entrar em{" "}
            <span className="text-highlight font-bold">contato</span> comigo.
            Vamos bater um papo!
          </p>
        </div>
        <div
          id="contact"
          className="flex flex-1 flex-wrap gap-4 justify-center"
        >
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
    </div>
  );
}

export default Footer;
