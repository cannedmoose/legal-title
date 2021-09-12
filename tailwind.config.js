module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
       'heading': ['Barlow Condensed','ui-sans-serif', 'system-ui']
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "red-600":"#D22027",
        "gray-600":"#4D545A"
      },
    },

    listStyleType: {
      none: 'none',

       disc: 'disc',

       decimal: 'decimal',

       circle: 'circle',

       roman: 'upper-roman',
      }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
