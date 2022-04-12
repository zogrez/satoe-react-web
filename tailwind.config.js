module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'Sans serif'],
      inter: ['Inter', 'Sans serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      primary: '#3196B9',
      white: '#fff',
    },
  },
  plugins: [],
};
