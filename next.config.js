// next.config.js
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
// next.config.js
const withTM = require('next-transpile-modules');

/*module.exports = withTM({
  transpileModules: ['react-reusable-components'],
});*/
module.exports = withCSS();

/*module.exports = {
  transpileModules: ['react-reusable-components'],
};*/
