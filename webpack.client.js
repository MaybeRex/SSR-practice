const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  // define entry
  entry: './client/index.js',

  // output for the bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
});
