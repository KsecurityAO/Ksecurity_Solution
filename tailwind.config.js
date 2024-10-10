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
         'letGreen':'#057412',
         'letGreenHover':'#0c5715',
         'darkGreen':'#99A19A',
         'Black':'#011403'
      },
      screens:{
          'tablet': '640px',
      // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

