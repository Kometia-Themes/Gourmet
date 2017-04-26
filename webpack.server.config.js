'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './src/prod.js'
  },
  output: {
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    host: "localhost",
    inline: false,
    port: 9000,
    stats: 'errors-only',
    filename: "prod.js"
  }
}
