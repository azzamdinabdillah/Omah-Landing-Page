/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary-color": "#828282",
        "bg-primary-color": "#F58634"
      }
    },
  },
  plugins: [],
}
