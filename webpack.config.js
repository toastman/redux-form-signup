var webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      './client.entry.js'
    ]
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        React: 'react'
      })
  ]
}
