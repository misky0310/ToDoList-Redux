/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg1:'#2c3e50',
        bg2:'#3498db',
      }
    },
  },
  plugins: [],
}

