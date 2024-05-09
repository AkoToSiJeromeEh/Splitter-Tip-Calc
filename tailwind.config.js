/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        White: 'hsl(0, 0%, 100%)', 
        VLGrayishcyan : 'hsl(189, 41%, 97%)',
        LGrayishcyan : 'hsl(185, 41%, 84%)',
        Grayishcyan : 'hsl(184, 14%, 56%)',
        DGrayishcyan : ' hsl(186, 14%, 43%)',
        VDGrayishcyan : 'hsl(183, 100%, 15%)',
        SCyan : ' hsl(172, 67%, 45%)'
      },
      fontFamily : { 
          
        SpaceMonospaceBold : ['SpaceMono', 'sans serif']
      }
    },
  },
  plugins: [],
}