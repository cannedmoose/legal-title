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
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
