/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#025048',
        secondary:'#5CCFAC',
        tetriary:'D4E9ED',
        dark:'#1C2429',
        light:'#EFFAFC'
      },
      fontFamily: { 
        'Jakarta' : ['Plus Jakarta Sans', 'sans-serif'] ,
        'body':['"Jakarta"']
      } 
    },
    container:{
      center:true,
      pading:'2rem'
    }
  },
  plugins: [],
}

