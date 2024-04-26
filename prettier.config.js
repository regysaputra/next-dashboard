const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  singlequote: false,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
