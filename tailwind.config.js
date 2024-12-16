/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/public/assets/images/hero-bg.webp')",
        "footer": "url('/public/assets/images/footer-bg.webp')"
      },
      colors: {
        "dark-blue": "#191A42",
        "light-purple": "#ECE8F8",
        "light-green": "#E3F7FA",
        "light-pink": "#FCE7EF",
        "light-gray": "#F7F9FB"
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px'
      },
      fontSize: {
        'custom-18': '18px',
        'custom-32': '32px',
        'custom-64': '64px'
      },
    },
  },
  plugins: [],
}