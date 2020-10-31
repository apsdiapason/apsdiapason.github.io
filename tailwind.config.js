module.exports = {
  purge: [],
  theme: {
      extend: {
        colors: {
          'aps-yellow': '#5c6ac4',
          'aps-blue': '#007ace',
          'aps-red': '#de3618',
          'aps-pink': '#de3618'
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
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  }
};