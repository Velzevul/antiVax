'use strict'

const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cssImport = require('postcss-import')
const cssNext = require('postcss-cssnext')

const NODE_ENV = process.env.NODE_ENV || 'development'
console.log(NODE_ENV)
console.log(__dirname)
const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'app')
}

const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/app' : '/app'

const getPlugins = () => {
  let plugins = []

  plugins.push(new CleanWebpackPlugin(['app'], {
    root: __dirname
  }))

  plugins.push(new CopyWebpackPlugin([
    {
      from: path.join(PATHS.src, 'index.html'),
      to: path.join(PATHS.app, 'index.html')
    }
  ]))

  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
    SERVER_URL: JSON.stringify('https://vdziubak.com/antiVaxServer'),
    PUBLIC_PATH: JSON.stringify(PUBLIC_PATH)
  }))

  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest']
  }))

  plugins.push(new ExtractTextPlugin('[name].css', {
    allChunks: true
  }))

  if (NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }))
  }

  return plugins
}

const config = {
  entry: {
    index: path.join(PATHS.src, 'index'),
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: PATHS.app,
    filename: '[name].js',
    publicPath: `${PUBLIC_PATH}/`
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src
      },
      {
        test: /\.(png|jpg|svg)/,
        loader: 'file?name=images/[name].[hash].[ext]',
        include: PATHS.src
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'),
        include: PATHS.src
      }
    ]
  },
  plugins: getPlugins(),
  devtool: NODE_ENV === 'production' ? null : 'cheap-inline-module-source-map',
  watch: NODE_ENV === 'development',
  postcss: () => {
    return [
      cssImport({ addDependencyTo: webpack }),
      cssNext()
    ]
  }
}

module.exports = config
