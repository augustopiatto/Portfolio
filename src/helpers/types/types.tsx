type Major = {
  id: number;
  name: string;
  college: string;
  term: string;
  location: string;
};

type Course = {
  id: number;
  name: string;
  institution: string;
  institutionSVG: string;
  certificationLink: string;
  technologies: string[];
};

type Contact = {
  id: number;
  copy?: boolean;
  download?: boolean;
  name: string;
  href: string;
  src: string;
};

type Project = {
  id: number;
  name: string;
  img: string;
  description: string;
  technologies: string[];
  details: string;
};

export type { Contact, Course, Major, Project };
