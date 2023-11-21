/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      width: {
        widthmojde: "400px",
      },
      spacing: {
        leftmojde: "50%",
      },
      inset: {
        insetmojde: "calc(50% - 400px / 2)",
      },
    },
  },
  plugins: [],
  darkMode:'class',
};
