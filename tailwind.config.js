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
        "touch-ripple": "touchRipple 700ms ease-out forwards",
      },
      keyframes: {
        touchRipple: {
          "0%": { opacity: "0.8", transform: "translate(-50%, -50%) scale(1)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) scale(8)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};