/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        base: "1.6rem",
      },
      colors: {
        brand: {
          bg: "#FFFFFF",
          surface: "#FFFFFF",
          section: "#F7F7F7",
          "section-dark": "#EEEEEE",
          text: "#111111",
          muted: "#666666",
          border: "#EAEAEA",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 90s linear infinite",
      },
    },
  },
  plugins: [],
};