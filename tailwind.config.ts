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
        'primary-color': '#228B22',
      },
      height: {
        navbar: '7rem',
        screenMinusNavbar: 'calc(100vh - 7rem)',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/pages/home/hero/maronti.jpg')",
        'wave-pattern': "url('/assets/images/pages/home/hero/wave.svg')",
        'wave-white-pattern':
          "url('/assets/images/pages/gallery/white-down-wave.svg')",
        'map-pattern': "url('/assets/images/pages/home/howToFindUs/map.png')",
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
