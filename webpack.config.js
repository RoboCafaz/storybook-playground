const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 12305,
    lazy: false,
    publicPath: '/',
    historyApiFallback: true
  },
  entry: {
    index: './src/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      chunksSortMode: 'manual',
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    mainFiles: ['index']
  }
};
