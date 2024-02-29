/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['SegoeUI', 'sans-serif'],
        tenada: ['Tenada', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dodgerBlue: '#23B0FF',
        radicalRed: '#FF256F',
        Shamrock: '#25CC68',
        crimsonRed: '#F40606',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
