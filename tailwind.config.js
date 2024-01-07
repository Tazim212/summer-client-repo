/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo': "url('/src/assets/Images/bg_img.jpg)"
      }
    },
  },
  plugins: [require("daisyui")],
}

