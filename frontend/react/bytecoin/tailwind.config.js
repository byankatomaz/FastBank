/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: 'hsla(5,100%,75%,1)',
        primary: 'hsla(5,100%,35%,1)',
        primaryDark: 'hsla(5,100%,25%,1)',
      },
    },
  },
  plugins: [],
}