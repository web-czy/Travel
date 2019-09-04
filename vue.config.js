const path = require('path');
const appData = require('./data.json');
const home = appData.home;
const city = appData.city;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    before(app) {
      app.get('/api/home', function(req, res) {
        res.json({
          errno: 0,
          data: home
        });
      });
      app.get('/api/city', function(req, res) {
        res.json({
          errno: 0,
          data: city
        });
      });
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('pages', resolve('src/pages'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('base', resolve('src/base'));
  }
};
