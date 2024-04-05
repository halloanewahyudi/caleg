/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['plus-jakarta-body', 'system-ui']
      },
      colors:{
        primary:'#025048',
        secondary:'#00d2b0',
        light:'#ecfafc'
      }
    },
  },
  plugins: [],
}

