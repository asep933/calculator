/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "back-gambar": "url('/public/bg-image.jpg')",
      },
      colors: {
        primary: "#fffdd0",
        secound: "#add8e6",
        "back-top": "#333333",
        "back-bottom": "#87CEEB",
      },
    },
  },
  plugins: [],
};
