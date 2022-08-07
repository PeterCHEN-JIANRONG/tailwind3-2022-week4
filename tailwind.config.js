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
      fontSize: {
        base: ['16px', '1.5'],
        lg: ['18px', '1.5'],
        xl: ['20px', '1.5'],
        '2xl': ['24px', '1.5'],
        '3xl': ['30px', '1.5'],
        '4xl': ['36px', '1.5'],
        '5xl': ['48px', '1.5'],
        '6xl': ['64px', '1.5'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}