type Major = {
  name: string;
  college: string;
  term: string;
  location: string;
};

type Course = {
  name: string;
  institution: string;
  institutionSVG: string;
  certificationLink: string;
  technologies: string[];
};

type Contact = {
  copy?: boolean;
  download?: boolean;
  name: string;
  href: string;
  src: string;
};

export type { Contact, Course, Major };
