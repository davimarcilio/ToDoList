/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-700-figma': '#0D0D0D',
        'gray-100-figma': '#F2F2F2',
        'gray-200-figma': '#D9D9D9',
        'gray-300-figma': '#333333',
        'gray-400-figma': '#808080',
        'gray-500-figma': '#262626',
        'blue-dark-figma': '#1E6F9F',
        'blue-figma': '#4EA8DE',
        'purple-figma': '#8284FA',
      },
      fontFamily: {
        "Inter": 'Inter'
      },
      padding: {
        '13': '52px',

      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}
