/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.hbs', // Certifique-se de incluir os arquivos HBS
    './public/**/*.html', // Caso tenha arquivos HTML na pasta public
    './src/**/*.{js,ts}',  // Se tiver algum JavaScript ou TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}