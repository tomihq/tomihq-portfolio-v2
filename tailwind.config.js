/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': 'rgb(17 17 17)',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        }),
        textColor:{
          'primary': '#FFFFFF',
          'secondary': '#8FA206',
          'terciary': '#61AEC9',
          },
    },
    
  },
  plugins: [require("@tailwindcss/typography")],
}