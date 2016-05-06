'use strict';

const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin  = require('npm-install-webpack-plugin');
const CleanPlugin       = require('clean-webpack-plugin');

const cssImport  = require("postcss-import");
const cssNext    = require("postcss-cssnext");
const cssFont    = require('postcss-font-magician');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.ejs',
      title: 'AntiVax',
      appMountId: 'app',
      inject: false
    })
  ],
  postcss: () => {
    return [
      cssImport({ addDependencyTo: webpack }),
      cssNext(),
      cssFont()
    ];
  }
};

const development = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    stats: 'errors-only',

    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'postcss'],
        include: PATHS.app,
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin({
      save: true
    })
  ],

  devtool: 'eval-source-map'
};

const production = {
  entry: {
    vendor: Object.keys(pkg.dependencies)
  },

  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss'),
        include: PATHS.app,
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CleanPlugin([PATHS.build]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new ExtractTextPlugin('[name].[chunkhash].css', {
      allChunks: true
    })
  ]
};

let config = merge({}, common);

if (TARGET === 'start' || !TARGET) {
  config = merge(config, development);
}

if (TARGET === 'build') {
  config = merge(config, production);
}

module.exports = config;
