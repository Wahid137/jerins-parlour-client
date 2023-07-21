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
          secondary: '#FFF8F5',
          "base-500": '##F4F7FC',
          neutral: '#3D4451',
          "base-100": '#FFFFFF',
          "base-200": '#FFE3E3',
          "base-300": '#FF4545'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

