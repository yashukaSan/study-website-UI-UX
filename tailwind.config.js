// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 👈 Enable class-based switching
  theme: {
    extend: {},
  },
  plugins: [],
};
