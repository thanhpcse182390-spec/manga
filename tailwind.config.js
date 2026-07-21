/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D084',
        dark: '#1a1a1a',
        'dark-secondary': '#2a2a2a',
      },
    },
  },
  plugins: [],
};
