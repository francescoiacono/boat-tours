import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-60-opacity': '#ffffff80',
      },
      height: {
        navbar: '7rem',
        screenMinusNavbar: 'calc(100vh - 7rem)',
      },
      backgroundImage: {
        'hero-pattern': "url('/ischia.jpg')",
        'wave-pattern': "url('/wave.svg')",
      },
      animation: {
        'wave-1': 'wave1 20s linear infinite',
        'wave-2': 'wave2 150s linear infinite',
        'wave-3': 'wave3 10s linear infinite',
      },
      keyframes: {
        wave1: {
          '0%': { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '100vw 0' },
        },
        wave2: {
          '0%': { backgroundPosition: '38vw 0' },
          '100%': { backgroundPosition: '138vw 0' },
        },
        wave3: {
          '0%': { backgroundPosition: '100vh 0' },
          '100%': { backgroundPosition: '-100vh 0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
