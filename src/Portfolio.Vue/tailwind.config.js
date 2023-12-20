/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: //https://uicolors.app/create
      {
        'pf-red': {
          '50': '#fff1f1',
          '100': '#ffe1e1',
          '200': '#ffc7c7',
          '300': '#f68989', // this is Geraldine
          '400': '#ff4f4f', // this is Coral Red
          '500': '#f83b3b', // this is Coral Red
          '600': '#e51d1d',
          '700': '#c11414',
          '800': '#a01414',
          '900': '#8b0404', // this is Red Berry
          '950': '#540000', // this is Mahogany
        },
      

        'woodsmoke': 
        {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#141414',
        },
      
      },
      
      fontFamily: 
      {
        verdana: ['Verdana', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

