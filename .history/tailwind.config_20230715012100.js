/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        parlourTheme: {
          primary: '#F63E7B',
          secondary: '#19D3AE',
          accent: '#3A4256',
          neutral: '#3D4451',
          "base-100": '#FFFFFF',
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

