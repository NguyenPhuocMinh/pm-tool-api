"use strict";

require("source-map-support/register");
var nodeExternals = require('webpack-node-externals');
var path = require('path');
module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  optimization: {
    // We do not want to minimize our code.
    minimize: false
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@conf': path.resolve(__dirname, './src/conf'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@commons': path.resolve(__dirname, './src/commons'),
      '@core': path.resolve(__dirname, './src/core'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@mappings': path.resolve(__dirname, './src/mappings'),
      '@middleware': path.resolve(__dirname, './src/middleware'),
      '@services': path.resolve(__dirname, './src/services'),
      '@shares': path.resolve(__dirname, './src/shares'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@adapters': path.resolve(__dirname, './src/adapters'),
      '@layers': path.resolve(__dirname, './src/layers'),
      '@models': path.resolve(__dirname, './src/models'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@validators': path.resolve(__dirname, './src/validators'),
      '@policies': path.resolve(__dirname, './src/policies'),
      '@workers': path.resolve(__dirname, './src/workers'),
      '@transfers': path.resolve(__dirname, './src/transfers'),
      '@schemas': path.resolve(__dirname, './src/schemas'),
      '@builds': path.resolve(__dirname, './src/builds'),
      '@resources': path.resolve(__dirname, './src/resources')
    },
    modules: ['node_modules', 'bower_components', 'shared', '/shared/vendor/modules']
  }
};