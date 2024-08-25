/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html","./dist/info.html","./dist/testing.html"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(34, 112, 226)",
        "custom-lightblue": "rgb(244, 248, 253)",
        red: {
          600: "#e53e3e",
        },
        green: {
          600: "#38a169",
        },
      },
      
      keyframes: {
        scaleUp: {
          "0%": { transform: "translate(-50%, -50%) scale(0)" },
          "100%": { transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.5s ease",
      },
      spacing: {
        "screen-width": "50vw",
        "screen-height": "90vh",
      },
    },
  },
  plugins: [],
};

