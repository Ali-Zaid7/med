/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'maxxm': { 'max': '480px' }, // ✅ custom breakpoint for ≤ 480px
      },
    },
  },
  plugins: [],
};
