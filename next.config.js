const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    camelCase: 'dashes',
  },
  exportPathMap: (defaultPathMap) => ({
    '/': { page: '/' },
    '/account': { page: '/account' },
  }),
});
