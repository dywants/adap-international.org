/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2ACF03',
        greenLight: '#E7FBC7',
        secondary: '#FB0A38',
        blueLight: '#0AB0FB',
        redLight: '#FB550A',
        indigoLight: '#CD0AFB',
      },
    },
  },
  plugins: [],
}
