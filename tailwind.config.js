module.exports = {
  purge: [],
  theme: {
      colors :{
        'yellowaps' :  '#FFFF00',
        'blueaps' :  '#0000FF',
        'pinkaps' :  '#FF00FF',
        'redaps' :  '#FF0000',
      },
      extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
    fontFamily: {}
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
}