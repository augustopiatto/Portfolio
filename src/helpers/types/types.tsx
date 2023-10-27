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

export type { Course, Major };
