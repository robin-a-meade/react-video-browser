const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
module.exports = config;

// To make babel work:
// babel-core is the core of babel
//     npm install --save-dev @babel/core 
// babel-preset-env is an intelligent babel preset
//     npm install --save-dev @babel/preset-env 
// babel-loader is the webpack loader for babel
//     npm install --save-dev babel-loader

// For loading CSS:
// style-loader injects CSS into the DOM
//     npm install --save-dev style-loader
// css-loader interprets @import and url()
//     npm install --save-dev css-loader
// Add rule:
//     {
//       test: /\.css$/,
//       use: [
//         'style-loader',
//         'css-loader'
//       ]
//     }

// For loading images and other assets
// https://webpack.js.org/guides/asset-management/

