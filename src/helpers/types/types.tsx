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
  name: string;
  link: string;
  svg: string;
};

export type { Contact, Course, Major };
