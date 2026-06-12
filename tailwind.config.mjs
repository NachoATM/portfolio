/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans: ["Outfit", "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      colors: {
        blue: {
          DEFAULT: "#1a6fd4",
          light: "#e8f1fb",
          mid: "#378ADD",
          dark: "#4d9bec",
          "dark-bg": "#0d2a4a",
        },
      },
    },
  },
  plugins: [],
};
