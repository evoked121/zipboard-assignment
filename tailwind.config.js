/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
