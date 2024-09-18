import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'var(--font-helvetica-display)',
        mono: 'var(--font-helvetica-mono)',
      },
      fontWeight: {
        superbold: '900',
      },
      colors: {
        background: '#121212',
        foreground: '#c1c1bd',
        bg: {
          light: '#b3b2ae',
        },
      },
    },
  },
  plugins: [],
};
export default config;
