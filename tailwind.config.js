module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        red: 'hsl(0, 100%, 68%)',
        VeryDarkBlue: 'hsl(230, 29%, 20%)',
        DarkGrayishBlue: 'hsl(230, 11%, 40%)',
        GrayishBlue:'hsl(231, 7%, 65%)',
        LightGrayishBlue: 'hsl(207, 33%, 95%)'
      }
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      barlowCondensed: ['"Barlow Condensed"', 'sans-serif']
    }
  },
  plugins: [],
}
