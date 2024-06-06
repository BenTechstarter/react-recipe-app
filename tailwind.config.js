// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Aktualisiert von purge zu content
  darkMode: 'class', // oder 'media', je nach gewünschtem Verhalten
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
