/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          1000: "#292d32",
          1100: "#898989",
          1200: "#424245",
          1300: "#59595b",
        },
      },
      backgroundImage: {
        "line-pattern": "url('assets/img/VectorsHome.png')",
        "contact-us":
          "linear-gradient(to right bottom, rgba(16, 112, 255, 0.23), rgba(16, 112, 255, 0.23)), url('/src/assets/img/contact-us.jpg')",
      },
      screens: {
        tablet: "850px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
