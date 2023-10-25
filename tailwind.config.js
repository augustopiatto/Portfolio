/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(241, 241, 246)",
        card: "rgb(228, 228, 233)",
        title: "rgb(52, 52, 80)",
        paragraph: "rgb(87, 87, 116)",
        highlight: "rgb(149, 149, 166)",
        primary: "rgb(143, 101, 233)",
        secondary: "rgb(250, 250, 255)",
        "light-grey": "rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        chivo: ["Chivo Mono", "sans-serif"],
      },
      borderRadius: {
        large: "50px",
      },
      boxShadow: {
        card: "0px 3px 10px 0px",
      },
    },
  },
  plugins: [],
};
