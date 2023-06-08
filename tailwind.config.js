/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      epilogue: ["Epilogue", "sans-serif"],
    },

    animation: {
      topdown: "topdown 1s ease-in-out",
    },

    keyframes: {
      topdown: {
        "0%": {
          transform: "translateY(-3rem)",
          opacity: "0",
        },

        "100%": {
          transform: "translateY(0rem)",
          opacity: "1",
        },
      },
    },

    extend: {},
  },
  plugins: [],
}
