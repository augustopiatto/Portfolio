type MajorType = {
  id: number;
  name: string;
  college: string;
  term: string;
  location: string;
  type: string;
  grade: string;
};

type CourseType = {
  id: number;
  name: string;
  institution: string;
  institutionSVG: string;
  certificationLink: string;
  technologies: string[];
};

type ContactType = {
  id: number;
  copy?: boolean;
  download?: boolean;
  name: string;
  href: string;
  src: string;
};

type ProjectDetails = {
  objective: string;
  link: string;
  moreImages: string[];
};

type ProjectType = {
  id: number;
  name: string;
  img: string;
  description: string;
  technologies: string[];
  details: ProjectDetails;
};

type LanguageType = {
  id: number;
  name: string;
  level: string;
};

type Dialogs = {
  [key: number]: () => void;
};

export type {
  ContactType,
  CourseType,
  MajorType,
  ProjectType,
  LanguageType,
  Dialogs,
};
