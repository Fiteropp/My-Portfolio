module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
