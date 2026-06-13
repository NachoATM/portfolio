/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        sans:  ["Inter", "sans-serif"],
        mono:  ['"DM Mono"', "monospace"],
      },
      colors: {
        green: {
          DEFAULT: "#1E5C40",
          dark:    "#123D2A",
          light:   "#8FD6A8",
          bg:      "#e5f3eb",
        },
      },
    },
  },
  plugins: [],
};
