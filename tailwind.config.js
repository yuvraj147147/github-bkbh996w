/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#001F54',
        'navy-blue-dark': '#000033',
      },
    },
  },
  plugins: [],
};