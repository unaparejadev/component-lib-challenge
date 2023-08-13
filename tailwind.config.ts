import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          500: 'hsl(236, 72%, 79%)',
          600: 'hsl(237, 63%, 64%)',
        },
        neutral: {
          200: 'hsl(240, 78%, 98%)',
          400: 'hsl(234, 14%, 74%)',
          500: 'hsl(233, 13%, 49%)',
          600: 'hsl(232, 13%, 33%)',
        }
      },
    },
  },
  plugins: [],
}
export default config
