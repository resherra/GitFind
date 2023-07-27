/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primColor: "#303841",
        secColor: "#3A4750",
        brandBlue: "#9db2bf",
        textColor: "#eeeeee",
      },
      fontFamily: {
        display: ["cascadia code"],
      },
    },
  },
  plugins: [],
}
