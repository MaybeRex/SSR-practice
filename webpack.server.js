const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
  // inform wp that we are building a file for node. not the browser
  target: 'node',

  // define entry
  entry: './server/index.js',

  // output for the bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
})
