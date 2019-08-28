const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('base', resolve('src/base'))
      .set('api', resolve('src/api'))
      .set('common', resolve('src/common'));
  }
};
