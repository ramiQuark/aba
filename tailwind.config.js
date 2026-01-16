/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/app.scss",
    "./src/**/*.{js,scss,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#3F4345',
        secondary: '#00ADC0',
      },
      boxShadow: {
        'main1': '0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'main2': '0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'main3': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'main4': '0px 4px 6px -4px rgba(0, 187, 167, 0.3)',
        'main5': '0px 10px 15px -3px rgba(0, 187, 167, 0.3)'
      }
    },
  },
  plugins: [],
}