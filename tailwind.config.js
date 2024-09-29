/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sera incluido em todos os arquivos dentro da pasta src
  ],
  theme: {
    extend: {
      colors:{
         'Bgreen': 'rgb(26, 44, 28)',
         'Bgreen-transparent':'rgba(26, 44, 28,.6)',
         'whiteText':'#fcf6f6',
         'letGreen':'#057412'
      },
    },
  },
  plugins: [],
}

