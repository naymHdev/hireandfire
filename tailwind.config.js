/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        industryHBg: "url('/Images/Background image 1.svg')",
        contactForm: "url('/Images/Background image 2.svg')",
        homeBannerBg: "url('/Images/connecting-employees.jpg')",
        homeBannerBgs: "url('/Images/cheerful-recruiter-shaking-hands.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
