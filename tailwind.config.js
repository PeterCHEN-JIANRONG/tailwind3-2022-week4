module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      colors: {
        primary: {
          light: '#ca130d',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        light: '#FBF2F2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}