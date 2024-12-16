/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#D9D9D9', // Light mode background
          dark: '#111827', // Dark mode background
        },
        text: {
          light: '#000000', // Light mode text
          dark: '#f3f4f6', // Dark mode text
        },
        primary: '#7E02B5',
        secondary: {
          light: '#adb5bd',
          dark: '#26324E',
        }
      },
    },
  },
  plugins: [],
}

