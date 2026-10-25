/** Tailwind config — brand system from the Vittoria Aviation Website Source
 *  Document (VA/WEB/SRC/2026/002, Section 4.2): Vittoria Navy #14284B,
 *  Steel Blue #4A6B8A, Vittoria Gold #B08D3F (accent only), Mist #EEF2F7,
 *  Graphite #2B2B2B body text. The `abus` scale is kept as the primary
 *  palette name so existing components pick up the new brand values. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        abus: { 900: "#14284B", 700: "#1F3A63", 500: "#4A6B8A", 300: "#9DB4C8", 100: "#DCE5EE" },
        gold: { DEFAULT: "#B08D3F", dark: "#8F712F", light: "#D9BE82" },
        ink: { 900: "#2B2B2B", 700: "#444444", 500: "#5A5A5A", 300: "#9A9A9A" },
        line: "#DDE4EC",
        paper: "#FFFFFF",
        cloud: "#EEF2F7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
