/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        industryHBg: "url('/public/Images/Background image 1.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
