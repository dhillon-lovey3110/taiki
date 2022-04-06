module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      dark: '#A7A7A7',
      darkBlue: '#25416B',
      darkGreen: '#256B2C',
      darkRed: '#8C3327',
      darkYellow: '#9A720A',
      gray: {
        100: '#f3f4f6',
        200: '#EAEBEC',
        300: '#D4D6D8',
        400: '#BFC2C5',
        500: '#61666B',
        600: '#3A3D40',
        700: '#27292B',
        800: '#121314',
        900: '#0A0A0A',
      },
      cyan: {
        100: '#D9F1FC',
        200: '#C6EAFA',
        300: '#B4E3F9',
        400: '#A1DCF7',
        500: '#7BCEF4',
        600: '#4DBCF1',
        700: '#2FB2EE',
        800: '#1DABED',
        900: '#1193D0',
      },
      blue: {
        100: '#EBF5FF',
        200: '#ADD9FF',
        300: '#85C6FF',
        400: '#5CB3FF',
        500: '#33A0FF',
        600: '#0086FF',
        700: '#006DCC',
        800: '#0062B8',
        900: '#00417A',
      },
      orange: {
        100: '#FFF7EB',
        200: '#FEE7C3',
        300: '#FDD087',
        400: '#FCC05F',
        500: '#FBB036',
        600: '#FAA00F',
        700: '#F09605',
        800: '#DC8904',
        900: '#521200',
      },
      red: {
        100: '#FDECF1',
        200: '#F9C7D4',
        300: '#F6A2B7',
        400: '#F27D9A',
        500: '#EE587E',
        600: '#EB3160',
        700: '#CC1442',
        800: '#A71136',
        900: '#6F0B24',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      agradir: ['agrandirregular'],
      agradirBold: ['agrandirtext_bold']
    },
    extend: {
      backgroundImage: {
        'footer-texture': "url('/assets/images/footer-images.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '75%': '75%',
        '50%': '50%',
        '16': '4rem',
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}