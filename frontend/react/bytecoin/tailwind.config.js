/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: 'hsla(5,100%,35%,1)',
        primary: 'hsla(1,100%,25%,1)',
        primaryDark: 'hsla(1,100%,15%,1)',
        grayPri: 'hsla(360, 0%, 30%, 0.69)',
        grayLight: 'hsla(360, 0%, 50%, 0.69)',
      },
    },
  },
  plugins: [],
}