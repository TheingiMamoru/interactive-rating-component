/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'overpass':['Overpass', 'sans-serif']
    },
    extend: {
      colors:{
        'orange':'#fb7413',
        'white':'hsl(0, 0%, 100%)',
        'light-gray':'#959eac',
        'medium-gray':'hsl(216, 12%, 24%)',
        'dark-blue':'hsl(213, 19%, 18%)',
        'very-dark-blue':'hsl(216, 12%, 8%)',
      },
      animation:{
        'spin-slow':'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}
