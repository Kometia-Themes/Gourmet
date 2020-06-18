'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackShellPlugin = require('webpack-shell-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
  entry: {
    app: './src/dev.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/[name].jsx',
    publicPath: '/assets/'
  },

  module: {
    rules: [{
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_module/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css-loader!less-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.exec.js$/,
        use: ['script-loader']
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    slick: 'slick-carousel'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CopyWebpackPlugin([
      { from: './src/images/', to: 'images' },
      { from: './src/assets/', to: 'assets' }
    ], {
      ignore: [
        // Doesn't copy any files with a extension
        '*.scss',
        '.DS_Store',
        'base/*',
        'pages/*',
        'components/*.scss'
      ]
    }, { copyUnmodified: true }),
    new webpack.ProvidePlugin({
      'utils': 'utils'
    }),
    new ExtractTextPlugin('assets/styles.css'),
    new WebpackShellPlugin({
      onBuildExit: ['node convert-twig-params.js --env=true']
    })
  ]
}
