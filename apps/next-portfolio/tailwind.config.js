const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: 'color-mix(in srgb, var(--color-primary-base) 5%, white)',
          100: 'color-mix(in srgb, var(--color-primary-base) 10%, white)',
          200: 'color-mix(in srgb, var(--color-primary-base) 30%, white)',
          300: 'color-mix(in srgb, var(--color-primary-base) 50%, white)',
          400: 'color-mix(in srgb, var(--color-primary-base) 70%, white)',
          500: 'var(--color-primary-base)',
          600: 'color-mix(in srgb, var(--color-primary-base), black 10%)',
          700: 'color-mix(in srgb, var(--color-primary-base), black 30%)',
          800: 'color-mix(in srgb, var(--color-primary-base), black 50%)',
          900: 'color-mix(in srgb, var(--color-primary-base), black 70%)',
        },
        secondary: colors.lime,
      }
    },
  },
  plugins: [],
};
