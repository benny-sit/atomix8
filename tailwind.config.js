/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'NostromoOutline': ['NostromoOutline'],
        'BebasNeue': ['"Bebas Neue"'],
        roboto: ['Roboto'],
        'FuturaPtBold': ['FuturaPtBold']
      },
      colors: {
        'primary-text':'#612a9b',
        'second-heavy':'#6c57e2',
        'second-lite':'#897fe5',
        'object-heavy':'#00c8ff',
        'object-lite':'#00fde4',
        'back-heavy':'#e5e4c3',
        'back-lite':'#fefeea',
        'common-first':'#c1c09f',
        'common-second':'#e5e3be',
        'rare-first':'#66e9ff',
        'rare-second':'#d4f9ff',
        'epic-first':'#ff5555',
        'epic-second':'#ff9797',
        'legendary-first':'#ffe05c',
        'legendary-second':'#ffeea9',
        'twitter-blue': '#1D9BF0'
       },
       animation: {
        'spin-slow': 'spin 50s linear infinite',
        'spin-slow-reverse': 'spin 50s linear reverse infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow-faster-reverse': 'spin 40s linear reverse infinite',
        'spin-slow-faster': 'spin 40s linear infinite',
        'spin-30s-reverse': 'spin 30s linear reverse infinite',
        'spin-30s': 'spin 30s linear infinite'
       },
       borderRadius: {
        '4xl': '2.25rem'
       }
    },
  },
  plugins: [],
}
