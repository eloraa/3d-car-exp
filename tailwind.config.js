/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Open Sans', sans-serif",
      },
      colors: {
        'green-0': '#c1ff00',
        'red-0': '#ff4c41',
      },
      animation: {
        border: 'background ease infinite',
        path: 'path 1s linear infinite',
      },
      keyframes: {
        background: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        path: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
