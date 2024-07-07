/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        reddish: '#FF7F7D',
        'light-gray': '#EDEDED',
        light: '#FAFAFA',
      },
    },
  },
  plugins: [],
};
