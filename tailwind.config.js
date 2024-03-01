/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '17vh': '17vh',
        '96vh': '96vh',
        '70vh': '70vh',
      },
      width: {
        '96vh': '96vh',
      },
      spacing: {
        '4vh': '4vh',
        '40': '10rem',
        '80vh': '80vh',
      }
    },
  },
  plugins: [],
}

