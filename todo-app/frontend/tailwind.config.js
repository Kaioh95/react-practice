/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^(bg|from|to|w|sm|md|lg|xl)-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
