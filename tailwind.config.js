/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080a",
        foreground: "#f3f1ea",
        surface: "#111114",
        "surface-2": "#17171b",
        muted: "#807f78",
        line: "rgba(243, 241, 234, 0.1)",
        "line-strong": "rgba(243, 241, 234, 0.22)",
        accent: "#ff3b1d",
        "accent-2": "#ff6a3d",
      },
      fontFamily: {
        display: ['"Anton"', "sans-serif"],
        sans: ['"Onest"', "sans-serif"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};