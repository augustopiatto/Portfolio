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

type LanguageType = {
  id: number;
  name: string;
  level: string;
};

type Dialogs = {
  [key: number]: () => void;
};

export type { ContactType, CourseType, MajorType, LanguageType, Dialogs };
