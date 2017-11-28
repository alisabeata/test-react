var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/main.js',
  
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'common.js'
  },
  
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
    
  },
};