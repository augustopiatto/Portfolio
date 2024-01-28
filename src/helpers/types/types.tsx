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
  certificateLink: string;
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

type PictureType = {
  src: string;
  alt: string;
};

type TimelineType = {
  id: number;
  year: number;
  info: string;
  picture: PictureType;
};

type Dialogs = {
  [key: number]: () => void;
};

export type {
  ContactType,
  CourseType,
  MajorType,
  LanguageType,
  TimelineType,
  Dialogs,
};
