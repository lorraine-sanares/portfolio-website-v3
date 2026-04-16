/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#d0e8ff',
        'dark-green': '#2a4d14',
        cream: '#f5f1e8',
        'muted-pink': '#e1c6c0',
      },
      fontFamily: {
        serif: ['Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
