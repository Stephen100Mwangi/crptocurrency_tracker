/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#FEFAF6",
        card: "#01204E",
        text: "#7743DB",
        hover: "#EBF3E8"
      }
    },
  },
  plugins: [],
}