const majors = [
  {
    name: "Engenharia de Materiais",
    college: "UNESP",
    term: "03/2013 - 12/2018",
    location: "Guaratinguetá, SP",
  },
  {
    name: "Materials Engineering",
    college: "Alfred University",
    term: "08/2015 - 05/2016",
    location: "Alfred, NY",
  },
];

const courses = [
  {
    name: "React",
    institution: "Origamid",
    institutionSVG: "src/assets/svg/origamid.svg",
    certificationLink: "aaa",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Vue.js 2",
    institution: "Origamid",
    institutionSVG: "src/assets/svg/origamid.svg",
    certificationLink: "aaa",
    technologies: ["HTML", "CSS", "JavaScript", "Vue"],
  },
  {
    name: "WordPress REST API",
    institution: "Origamid",
    institutionSVG: "src/assets/svg/origamid.svg",
    certificationLink: "aaa",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

const contacts = [
  {
    name: "LinkedIn",
    href: import.meta.env.VITE_LINKEDIN,
    src: "src/assets/svg/linked-in.svg",
  },
  {
    name: "GitHub",
    href: import.meta.env.VITE_GITHUB,
    src: "src/assets/svg/github.svg",
  },
  {
    name: "Email",
    href: import.meta.env.VITE_EMAIL,
    src: "src/assets/svg/email.svg",
    copy: true,
  },
  {
    name: "Phone",
    href: import.meta.env.VITE_PHONE,
    src: "src/assets/svg/phone.svg",
    copy: true,
  },
  {
    name: "Download",
    href: import.meta.env.VITE_CV,
    src: "src/assets/svg/download.svg",
    download: true,
  },
];

export { contacts, courses, majors };
