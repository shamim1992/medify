/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
          'Lora': ['Lora'],
       },
       colors: {
         primary: '#9334e9',
         secondary: '#ac1064',
         light: '#F5F5F5',
         dark: '#212121',
       }
    }
 },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require('daisyui'),],
}