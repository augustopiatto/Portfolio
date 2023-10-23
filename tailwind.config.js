/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(241, 241, 246)",
        title: "rgb(52, 52, 80)",
        highlight: "rgb(149, 149, 166)",
        primary: "rgb(143, 101, 233)",
        secondary: "rgb(250, 250, 255)",
        divider: "rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        chivo: ["Chivo Mono", "sans-serif"],
      },
      borderRadius: {
        large: "50px",
      },
    },
  },
  plugins: [],
};
