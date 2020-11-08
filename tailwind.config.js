module.exports = {
  purge: [],
  theme: {
    maxWidth: {
      '300': '300px'
      },
    extend: {
      colors: {
        'aps-yellow': {
          default:'#FFFF00',
          lighter:'#FFFFAA',
          darker:'#FFAA00'
        },
        'aps-blue': '#0000FF',
        'aps-red': '#FF00FF',
        'aps-pink': '#FF0000'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1.5rem',
        '3xl': '2.25rem'
      },
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
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  }
};
