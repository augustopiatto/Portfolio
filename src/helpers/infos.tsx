const GITHUB_BASE_URL = "https://github.com/augustopiatto/";

const majors = [
  {
    id: 1,
    name: "Engenharia de Materiais",
    college: "UNESP",
    term: "03/2013 - 12/2018",
    location: "Guaratinguetá, SP",
    type: "Bacharelado",
    grade: "7.1/10",
  },
  {
    id: 2,
    name: "Materials Engineering",
    college: "Alfred University",
    term: "08/2015 - 05/2016",
    location: "Alfred, NY",
    type: "Graduação Sanduíche",
    grade: "3.2/4",
  },
];

const courses = [
  {
    id: 1,
    name: "React",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: "https://drive.google.com/file/d/1CQDU3fVGDoPwpaP2mrITaGb5FGblimL_/view?usp=drive_link",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Hooks",
      "React Router",
      "Context",
      "Vite",
    ],
  },
  {
    id: 2,
    name: "TypeScript para Iniciantes",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: "https://drive.google.com/file/d/1SoPOdGsgJ7ZVEiKG6jTa4YeonW6CCAme/view?usp=drive_link",
    technologies: ["HTML", "TypeScript", "Type", "Interface", "Generics"],
  },
  {
    id: 3,
    name: "Vue.js 2",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: "https://drive.google.com/file/d/1OfEK27Lf21uIO0AJkx4f1Sxtsltzqm_c/view?usp=drive_link",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue",
      "Vuetify",
      "Vuex",
      "Vue Router",
      "Vite",
    ],
  },
  {
    id: 4,
    name: "UI Design para Iniciantes",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: "https://drive.google.com/file/d/1mJ4GmdEKPQ0ljGPdvX6pJNEFNMNVnEjj/view?usp=drive_link",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "SVG", "Prototipação"],
  },
  {
    id: 5,
    name: "WordPress REST API",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificationLink: "https://drive.google.com/file/d/1fhjD-UHUEQG4Ik9NiF7R_k1F-2UyhlVC/view?usp=drive_link",
    technologies: ["WordPress", "PHP", "REST"],
  },
];

const contacts = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/augusto-piatto/",
    src: "/svg/linked-in.svg",
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/augustopiatto",
    src: "/svg/github.svg",
  },
  {
    id: 3,
    name: "Email",
    href: "ampiatto@hotmail.com",
    src: "/svg/email.svg",
    copy: true,
  },
  {
    id: 4,
    name: "Phone",
    href: "11994029118",
    src: "/svg/phone.svg",
    copy: true,
  },
  {
    id: 5,
    name: "Download CV",
    href: "https://drive.google.com/file/d/1Fxhqwj6AXas1V8raIe_qjsMzLZzgQ9yB/view?usp=drive_link",
    src: "/svg/download.svg",
    download: true,
  },
];

const projects = [
  {
    id: 1,
    name: "React - Origamid",
    img: "/images/react-origamid.png",
    description: "Uma rede social para colocar as fotos de seus cachorros",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "React Router",
      "Prop Types",
      "Vite",
    ],
    details: {
      objective: (
        <>
          Projeto feito para aprender React baseado no curso do site{" "}
          {
            <a href="https://www.origamid.com/" target="_blank">
              Origamid
            </a>
          }
          . Neste site é possível se cadastrar, logar, recuperar a senha,
          adicionar fotos dos seus cachorros e ver as estatísticas de acesso aos
          seus posts.
        </>
      ),
      href: GITHUB_BASE_URL + "Origamid-React",
      moreImages: [{ name: "teste", src: "/images/react-origamid.png" }],
    },
  },
  {
    id: 2,
    name: "Liga Magic - Processo Seletivo",
    img: "/images/liga-magic.png",
    description: "Formulário para se cadastrar em um campeonato de Magic",
    technologies: [
      "Vue3",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
      "Vite",
      "Vitest",
    ],
    details: {
      objective:
        "Projeto feito para processo seletivo da empresa Liga Magic. Neste site é possível escolher opções de um formulário em um componente passo a passo e validar seus inputs",
      href: GITHUB_BASE_URL + "LigaMagic-ProcessoSeletivo",
      moreImages: [{ name: "teste2", src: "/images/liga-magic.png" }],
    },
  },
  {
    id: 3,
    name: "DNC - Processo Seletivo",
    img: "/images/dnc.png",
    description: "Sistema de cadastro de alunos, notas e exibição de rank",
    technologies: [
      "Vue3",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
      "Vite",
      "Vuetify",
      "Axios",
      "Django",
      "Python",
      "PostgreSQL",
      "Pydantic",
      "Docker",
      "Pytest",
    ],
    details: {
      objective:
        "Projeto feito para processo seletivo da empresa DNC. Neste site é possível realizar cadastro de usuário, associar notas ao usuário e o sistema gera uma listagem de top 3 melhores alunos e uma listagem de top 10 alunos por curso",
      href: GITHUB_BASE_URL + "DNC-ProcessoSeletivo",
      moreImages: [{ name: "teste3", src: "/images/dnc.png" }],
    },
  },
];

const languages = [
  { id: 1, name: "Português", level: "Nativo" },
  { id: 2, name: "Inglês", level: "Avançado" },
  { id: 3, name: "Espanhol", level: "Intermediário" },
];

export { contacts, courses, majors, projects, languages };
