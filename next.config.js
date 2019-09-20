// next.config.js
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
// next.config.js
const withTM = require('next-transpile-modules');
<<<<<<< HEAD

/*module.exports = withTM({
  transpileModules: ['react-reusable-components'],
});*/
module.exports = withCSS();
=======
 
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
>>>>>>> 04deee2caca89b531da53a9eb8f5770f5980de3d

/*module.exports = {
  transpileModules: ['react-reusable-components'],
};*/
