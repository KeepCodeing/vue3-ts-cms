/* eslint-disable @typescript-eslint/no-var-requires */
// vue.config.js

const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({}),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
};
