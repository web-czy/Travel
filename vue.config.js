const path = require('path');
const appData = require('./data.json');
const home = appData.home;

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
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('pages', resolve('src/pages'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'));
  }
};
