'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackShellPlugin = require('webpack-shell-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StringReplacerPlugin = require('webpack-string-replacer-plugin');
var ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  entry: {
    prod: './src/prod.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/[name].js',
  },
  module: {
    rules: [
    ]
  },

  plugins: [
    new StringReplacerPlugin({
      assets: ['./dist/assets/*.css.twig'],
      replaceValue: '"{{',
      newValue: '{{'
    }),
    new StringReplacerPlugin({
      assets: ['./dist/assets/*.css.twig'],
      replaceValue: '}}"',
      newValue: '}}'
    }),
    new WebpackShellPlugin({
      onBuildEnd: ['node removefiles.js']
    }),
    new CopyWebpackPlugin([
      { from: './dist/assets/styles.css.twig', to: 'assets/styles.css.twig' },
      { from: './src/settings.json', to: 'settings.json' },
      { from: './src/assets', to: 'assets' },
      { from: './src/config', to: 'config' },
      { from: './src/layouts', to: 'layouts' },
      { from: './src/pages', to: 'pages' },
      { from: './src/partials', to: 'partials' },
      { from: './src/screenshots', to: 'screenshots' },
      { from: './src/assets/app.js', to: 'assets/app.js.twig' },
      { from: 'theme.png', to: 'theme.png' },
      { from: 'README.md', to: 'README.md' },
      { from:
        {
        glob:'.editorconfig', dot: true }, to: '.editorconfig', toType: 'file' },
      { from:
        {
        glob:'.gitignore', dot: true }, to: '.gitignore', toType: 'file' }
      ], { copyUnmodified: true }),

    new ZipPlugin({
      filename: 'theme.zip',
      pathPrefix: 'theme/1.0.0',  
      include: [/\.twig$/, /\.md$/, /\.jpg$/, /\.jpge$/, /\.png$/, /\.ico$/, /\.json$/, '.gitignore', '.editorconfig'],
      exclude: [/\.html$/, /\.css$/, /\.js$/, /\.php$/],
      fileOptions: {
        mtime: new Date(),
        mode: 0o100664,
        compress: true,
        forceZip64Format: false,
      }
    })
  ]
}
