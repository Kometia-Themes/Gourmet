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
    rules: [
    {
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
      use: [ 'script-loader' ]
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
      { from: './src/html/home.twig', to: 'home.html' },
      { from: './src/html/page.twig', to: 'page.html' },
      { from: './src/html/blog.twig', to: 'blog.html' },
      { from: './src/html/collection.twig', to: 'collection.html' },
      { from: './src/html/collections.twig', to: 'collections.html' },
      { from: './src/html/contact.twig', to: 'contact.html' },
      { from: './src/html/cart.twig', to: 'cart.html' },
      { from: './src/html/category.twig', to: 'category.html' },
      { from: './src/html/error404.twig', to: 'error404.html' },
      { from: './src/html/maintenance.twig', to: 'maintenance.html' },
      { from: './src/html/password.twig', to: 'password.html' },
      { from: './src/html/post.twig', to: 'post.html' },
      { from: './src/html/products.twig', to: 'products.html' },
      { from: './src/html/product.twig', to: 'product.html' },
      { from: './src/html/search.twig', to: 'search.html' },
      { from: './src/html/customers/account.twig', to: 'customers/account.html' },
      { from: './src/html/customers/activate.twig', to: 'customers/activate.html' },
      { from: './src/html/customers/login.twig', to: 'customers/login.html' },
      { from: './src/html/customers/order.twig', to: 'customers/order.html' },
      { from: './src/html/customers/recover.twig', to: 'customers/recover.html' },
      { from: './src/html/customers/register.twig', to: 'customers/register.html' },
      { from: './src/html/customers/reset.twig', to: 'customers/reset.html' },
      { from: './src/html/partials/_social-share.twig', to: 'partials/_social-share.html' },
      { from: './src/images/', to: 'images' },
      { from: './src/assets/', to: 'assets' }
      ],
      {ignore: [
        // Doesn't copy any files with a extension    
        '*.scss',
        '.DS_Store',
        'base/*',
        'pages/*',
        'components/*.scss'
      ]},
      { copyUnmodified: true }),
    new webpack.ProvidePlugin({
      'utils': 'utils'
    }),
    new ExtractTextPlugin('assets/styles.css'),
    new WebpackShellPlugin({
      onBuildExit: ['node convert-twig-params.js --env=true']
    })
  ]
}
