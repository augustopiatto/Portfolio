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

const languages = [
  { id: 1, name: "Português", level: "Nativo" },
  { id: 2, name: "Inglês", level: "Avançado" },
  { id: 3, name: "Espanhol", level: "Intermediário" },
];

const timelines = [
  {
    id: 1,
    year: 2010,
    info: "Curso técnico de manutenção automotiva na ETEC",
    picture: {
      src: "/images/profile.png",
      alt: "teste1",
    },
  },
  {
    id: 2,
    year: 2013,
    info: "Curso de Engenharia de Materiais na UNESP",
    picture: {
      src: "/images/profile.png",
      alt: "teste2",
    },
  },
  {
    id: 3,
    year: 2015,
    info: "Intercâmbio nos Estados Unidos pelo Ciência sem Fronteiras",
    picture: {
      src: "/images/profile.png",
      alt: "teste3",
    },
  },
  {
    id: 4,
    year: 2017,
    info: "Estágio em Engenharia",
    picture: {
      src: "/images/profile.png",
      alt: "teste4",
    },
  },
  {
    id: 5,
    year: 2021,
    month: "Janeiro",
    info: "Bootcamp de programação na Buser Brasil",
    picture: {
      src: "/images/profile.png",
      alt: "teste5",
    },
  },
  {
    id: 6,
    year: 2021,
    month: "Abril",
    info: "Desenvolvedor full stack júnior na Buser Brasil",
    picture: {
      src: "/images/profile.png",
      alt: "teste6",
    },
  },
  {
    id: 7,
    year: 2023,
    info: "Saída da Buser Brasil e começo de estudo focado em Front",
    picture: {
      src: "/images/profile.png",
      alt: "teste7",
    },
  },
  {
    id: 8,
    year: 2024,
    info: "Sua empresa?",
    picture: {
      src: "/images/profile.png",
      alt: "teste8",
    },
  },
];

const courses = [
  {
    id: 1,
    name: "React",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificateLink:
      "https://drive.google.com/file/d/1CQDU3fVGDoPwpaP2mrITaGb5FGblimL_/view?usp=drive_link",
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
    certificateLink:
      "https://drive.google.com/file/d/1SoPOdGsgJ7ZVEiKG6jTa4YeonW6CCAme/view?usp=drive_link",
    technologies: ["HTML", "TypeScript", "Type", "Interface", "Generics"],
  },
  {
    id: 3,
    name: "Vue.js 2",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificateLink:
      "https://drive.google.com/file/d/1OfEK27Lf21uIO0AJkx4f1Sxtsltzqm_c/view?usp=drive_link",
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
    certificateLink:
      "https://drive.google.com/file/d/1mJ4GmdEKPQ0ljGPdvX6pJNEFNMNVnEjj/view?usp=drive_link",
    technologies: ["HTML", "CSS", "JavaScript", "Figma", "SVG", "Prototipação"],
  },
  {
    id: 5,
    name: "WordPress REST API",
    institution: "Origamid",
    institutionSVG: "/svg/origamid.svg",
    certificateLink:
      "https://drive.google.com/file/d/1fhjD-UHUEQG4Ik9NiF7R_k1F-2UyhlVC/view?usp=drive_link",
    technologies: ["WordPress", "PHP", "REST"],
  },
];

const projects = [
  {
    id: 1,
    name: "Tela de Compra - Cartas",
    img: "/images/tela-compras-cartas.png",
    description:
      "Uma tela simulando a compra de uma carta, permitindo o usuário escolher as especificações",
    technologies: ["JavaScript", "HTML", "CSS"],
    details: {
      objective:
        "Projeto feito para estudo. O site foi feito usando Vanilla JavaScript (sem framework) e permite ao usuário escolher a edição da carta 'Contramágica', e apresenta um layout com interação, apesar de não apresentar muita lógica, pois o projeto foi desenvolvido a partir de uma tela no Figma sem protótipo ou interações",
      href: GITHUB_BASE_URL + "Tela-Compras-Cartas",
      moreImages: [
        {
          id: 1,
          name: "Modal",
          src: "/images/projects-modal/tela-compras-cartas-1.png",
        },
        {
          id: 2,
          name: "Dropdown",
          src: "/images/projects-modal/tela-compras-cartas-2.png",
        },
        {
          id: 3,
          name: "Warning",
          src: "/images/projects-modal/tela-compras-cartas-3.png",
        },
      ],
    },
  },
  {
    id: 2,
    name: "React - Origamid",
    img: "/images/react-origamid.png",
    description: "Uma rede social para colocar as fotos de seus cachorros",
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "Prop Types",
      "Vite",
      "HTML",
      "CSS",
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
      moreImages: [
        {
          id: 1,
          name: "Login",
          src: "/images/projects-modal/react-origamid-details-1.png",
        },
        {
          id: 2,
          name: "Cadastro",
          src: "/images/projects-modal/react-origamid-details-2.png",
        },
        {
          id: 3,
          name: "Modal",
          src: "/images/projects-modal/react-origamid-details-3.png",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Jornada do Herói",
    img: "/images/jornada-do-heroi.png",
    description:
      "Tela para definir um combate entre dois personagens de quadrinhos",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "NextJS",
      "HTML",
      "CSS",
    ],
    details: {
      objective:
        "Projeto feito para estudo. O site consome uma API fornecida e exibe os personagens 10 personagens por página. O usuário pode escolher 2 personagens para lutar e a lógica compara os status para ver qual ganharia em uma luta direta. O usuário pode filtrar os heróis que deseja e também pode visualizar em celular, pois é um projeto responsivo",
      href: GITHUB_BASE_URL + "",
      moreImages: [
        {
          id: 1,
          name: "Filtros",
          src: "/images/projects-modal/jornada-do-heroi-details-1.png",
        },
        {
          id: 2,
          name: "Seleção de Batalha",
          src: "/images/projects-modal/jornada-do-heroi-details-2.png",
        },
        {
          id: 3,
          name: "Modal",
          src: "/images/projects-modal/jornada-do-heroi-details-3.png",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Monitoramento de Ativos Financeiros",
    img: "/images/monitoramento-ativos-financeiros.png",
    description: "Sistema de controle de ativos financeiros",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vitest",
      "Django",
      "Python",
      "Pydantic",
      "Django SMTP E-mail",
      "Gunicorn",
      "PostgreSQL",
      "Docker",
      "Pytest",
      "Vite",
      "HTML",
    ],
    details: {
      objective:
        "Projeto feito para estudo. Neste site é possível que o usuário adicione ativos para sua conta, e o sistema monitora estes ativos no período de tempo estabelecido pelo usuário e o notifica através de e-mail quando o valor dos ativos atingem o especificado",
      href: GITHUB_BASE_URL + "Monitoramento-Ativos-Financeiros",
      moreImages: [
        {
          id: 1,
          name: "Modal",
          src: "/images/projects-modal/monitoramento-ativos-financeiros-details-1.png",
        },
        {
          id: 2,
          name: "Mensagem de erro",
          src: "/images/projects-modal/monitoramento-ativos-financeiros-details-2.png",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Questionário de Passo a Passo",
    img: "/images/questionario-passo-a-passo.png",
    description: "Formulário para se cadastrar em um campeonato de Magic",
    technologies: [
      "Vue3",
      "JavaScript",
      "SASS",
      "Vitest",
      "Vite",
      "HTML",
      "CSS",
    ],
    details: {
      objective:
        "Projeto feito para estudo. Neste site é possível escolher opções de um formulário em um componente passo a passo e validar seus inputs",
      href: GITHUB_BASE_URL + "Questionario-Passo-a-Passo",
      moreImages: [
        {
          id: 1,
          name: "Validação",
          src: "/images/projects-modal/questionario-passo-a-passo-details-1.png",
        },
        {
          id: 2,
          name: "Stepper",
          src: "/images/projects-modal/questionario-passo-a-passo-details-2.png",
        },
        {
          id: 3,
          name: "Warning",
          src: "/images/projects-modal/questionario-passo-a-passo-details-3.png",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Raspagem de Dados",
    img: "/images/raspagem-dados.png",
    description:
      "Realiza raspagem de dados no site Quotes to Scrape e faz o devido armazenamento",
    technologies: ["Python", "Scrapy", "Splash", "MongoDB", "Docker"],
    details: {
      objective:
        "Projeto feito para estudo. O projeto vasculha o site Quotes to Scrape, estrutura os dados e os salva em um banco não relacional, e gera provas de consulta",
      href: GITHUB_BASE_URL + "Raspagem-Dados",
      moreImages: [
        {
          id: 1,
          name: "Prova de consulta",
          src: "/images/projects-modal/raspagem-dados-details-1.png",
        },
      ],
    },
  },
  // {
  //   id: 1,
  //   name: "",
  //   img: "",
  //   description: "",
  //   technologies: [],
  //   details: {
  //     objective: "",
  //     href: GITHUB_BASE_URL + "",
  //     moreImages: [],
  //   },
  // },
];

export { contacts, courses, majors, projects, languages, timelines };
