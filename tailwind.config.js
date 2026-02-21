/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        accent: "#ff6600", // Warm Orange
        background: "#FAFAFA",
        "text-dark": "#111111",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        drama: ['"Outfit"', 'sans-serif'],
        data: ['"IBM Plex Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
