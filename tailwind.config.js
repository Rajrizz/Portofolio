const textShadow = require("tailwindcss-textshadow");

module.exports = {
  content: ["./**/*.{html,js}"], // atau sesuaikan dengan struktur project kamu
  theme: {
    extend: {},
  },
  plugins: [textShadow],
};

plugins: [
  function ({ addUtilities }) {
    const newUtilities = {
      '.text-shadow-sm': {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-md': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-lg': {
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
    };
    addUtilities(newUtilities, ['responsive']);
  },
]
