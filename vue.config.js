const path = require('path');
const home = require('./mock/home.json');
const city = require('./mock/city.json');
const detail = require('./mock/detail.json');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    before(app) {
      app.get('/api/home', function (req, res) {
        res.json(home);
      });
      app.get('/api/city', function (req, res) {
        res.json(city);
      });
      app.get('/api/detail', function (req, res) {
        res.json(detail);
      });
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('pages', resolve('src/pages'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('base', resolve('src/base'))
      .set('mock', resolve('mock'));
  }
};
