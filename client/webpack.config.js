'use strict'

let webpack = require('webpack')

let config = {
  entry: './app/index.jsx',
  output: {
    path: 'app/bundle/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel'
      }
    ]
  }
}

module.exports = config
