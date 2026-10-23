/** Tailwind config — same colours and fonts as the original static site's tailwind.config. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        abus: { 900: "#00205B", 700: "#0B2E73", 500: "#00A0DE", 300: "#7FCFF0" },
        ink: { 900: "#0C1420", 700: "#3B4657", 500: "#6B7688", 300: "#A6AFBB" },
        line: "#E4E7EC",
        paper: "#FFFFFF",
        cloud: "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
