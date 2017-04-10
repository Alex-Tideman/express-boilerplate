const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  context: __dirname,
   entry: [
     './lib/index.js'
   ],
   output: {
     path: __dirname,
     filename: 'bundle.js',
     publicPath: '/lib'
   },
   module: {
     loaders: [{
       test: /.jsx?$/,
       loader: 'babel-loader',
       include: path.join(__dirname, 'lib'),
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'react']
       }
     }]
   },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};
