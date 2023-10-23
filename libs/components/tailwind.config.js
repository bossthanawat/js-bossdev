const {
  createGlobPatternsForDependencies
} = require('@nx/react/tailwind');
const {
  join
} = require('path');
const colors = require('tailwindcss/colors');
const { listTintVariantColor } = require('./src/utils');


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
        'primary': listTintVariantColor('var(--color-primary-base)'),
        secondary: colors.lime,
      }
    },
  },
  plugins: [],
};
