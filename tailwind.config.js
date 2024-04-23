/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        dviolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        gviolet: "hsl(257, 7%, 63%)",
        vdblue: "hsl(255, 11%, 22%)",
        vdviolet: "hsl(260, 8%, 14%)",
      },
      fontSize: {
        size: "18px",
      },
      fontFamily: {
        family: ['Poppins'],
      },
    },
  },
  plugins: [],
}

