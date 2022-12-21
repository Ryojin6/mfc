const tailwind = require('tailwindcss');
const nesting = require('tailwindcss/nesting');

module.exports = {
  siteName: `Mutant Feline Collars 10,000 Mutated felines caged awaiting adoption by courageous owners.
  Your feline collar is your key to unveiling your adopted breed.`,
  siteUrl: process.env.FRONTEND_URI,
  icon: {
    favicon: './src/logo.jpg',
    touchicon: './src/logo.jpg',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, nesting],
      },
    },
  },
  plugins: [
    'gridsome-plugin-robots',
    '@gridsome/plugin-sitemap',
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM',
        enabled: true,
        debug: true,
      },
    },
  ],
};
