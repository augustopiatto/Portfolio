/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(241, 241, 246)",
        // card: "rgb(228, 228, 233)",
        title: "rgb(52, 52, 80)",
        "title-lighter": "rgb(52, 52, 80, 0.65)",
        paragraph: "rgb(87, 87, 116)",
        highlight: "rgb(149, 149, 166)",
        primary: "rgb(143, 101, 233)",
        secondary: "rgb(250, 250, 255)",
        "light-grey": "rgba(0, 0, 0, 0.25)",
        warning: "rgba(72, 72, 72, 0.5)",
        // verde forte
        success: "rgb(4, 218, 0)",
        // vermelho forte
        error: "rgb(232, 28, 0)",
        // teste de novos
        "1": "#9595A6",
        "2": "#0D051E",
        "3": "#2E2B33",
        // De cima mais clara
        "4": "rgba(60, 60, 60)",
        "5": "#FAFAFF",
        "6": "#7D52DA",
      },
      backgroundImage: {
        "radial-dark-purple-about": "radial-gradient(50% 50% at 50% 50%, rgb(65, 39, 120) 0%, rgb(13, 5, 30) 90%)",
        "radial-dark-purple-project": "radial-gradient(50% 50% at 50% 50%, rgb(65, 39, 120) 70%, rgb(13, 5, 30) 100%)",
        "radial-dark-purple-study": "radial-gradient(50% 50% at 50% 50%, rgb(65, 39, 120) 0%, rgb(13, 5, 30) 70%)",
        "footer": "linear-gradient(to bottom, rgb(38, 22, 70) 0%, rgb(13, 5, 30) 40%)",
        "tag": "linear-gradient(to right, rgb(166, 127, 249) 0%, rgb(196, 168, 255) 100%)",
        "warning": "linear-gradient(to right, rgb(13, 5, 30) 0%, rgb(46, 43, 51) 100%)",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        chivo: ["Chivo Mono", "sans-serif"],
      },
      borderRadius: {
        large: "50px",
        card: "50px 50px 50px 0px",
        dialog: "50px 0px 0px 10px",
        "ordinary-expansion": "24px 24px 24px 0px",
      },
      boxShadow: {
        card: "0px 3px 10px 0px rgba(0, 0, 0, 0.25)",
        expansion: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        focused: "0px 0px 10px 1000px rgba(0, 0, 0, 0.7)",
        "button-inner": "inset 0px 0px 10px 1000px rgb(0 0 0 / 0.04)",
      },
      width: {
        "project-image": "832px",
      },
      maxWidth: {
        inherit: "inherit",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in",
      },
      screens: {
        medium: "769px",
        large: "1440px"
      }
    },
  },
  plugins: [],
};
