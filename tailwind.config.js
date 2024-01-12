/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(241, 241, 246)",
        card: "rgb(228, 228, 233)",
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
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        chivo: ["Chivo Mono", "sans-serif"],
      },
      borderRadius: {
        large: "50px",
        card: "50px 50px 50px 0px",
        dialog: "50px 10px 50px 10px",
        "ordinary-expansion": "24px 24px 24px 0px",
      },
      boxShadow: {
        card: "0px 3px 4px 0px",
        expansion: "0px 4px 4px 0px",
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
        large: "1441px"
      }
    },
  },
  plugins: [],
};
