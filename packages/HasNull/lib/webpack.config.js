const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: ['./HasNull.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../')
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        compress: false,
        mangle: false,
        output: {
          beautify: true,
          comments: false
        }
      }
    })]
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['eslint-loader']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  }
};
