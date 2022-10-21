/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      keyframes: {
        "grayscale-in-down": {
          "0%": {
            opacity: 0,
            filter: "grayscale(0)",
          },
          "0%": {
            opacity: 50,
            filter: "grayscale(0.5)",
          },
          "100%": {
            filter: "grayscale(1)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "grayscale-in-down": "grayscale-in-down 500ms ease-out",
        "fade-in-down": "fade-in-down 500ms ease-out",
      },
    },
  },
  plugins: [],
};
