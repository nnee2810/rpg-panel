/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('https://res.cloudinary.com/nnee/image/upload/v1659676961/rpg/auth_bg.jpg')",
      },
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [],
}
