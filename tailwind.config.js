/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "1200px",
        "2sm": "1000px",
        sm: "800px",
        xs: "450px",
      },
    },
  },
  plugins: [],
};
