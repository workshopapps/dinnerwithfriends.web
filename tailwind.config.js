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
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/img/contact-us-new.png')",
      },
      screens: {
        tablet: "850px",
      },
      boxShadow: {
        'cardShadow': '2px 4px 4px rgba(0, 0, 0, 0.25)',
        'cardShadowMobile': '0px 0px 2px rgba(0, 0, 0, 0.25)',
      },
        backgroundPosition: {
          'top-4': '0 100px',
        }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
