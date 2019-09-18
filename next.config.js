// next.config.js
const withCSS = require('@zeit/next-css');
// next.config.js
const withTM = require('next-transpile-modules');
 
module.exports = withTM({
  transpileModules: ['react-reusable-components']
});
module.exports = withCSS({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});

/*module.exports = {
  transpileModules: ['react-reusable-components'],
};*/
