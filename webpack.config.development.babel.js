import webpack from 'webpack';

module.exports = {
  mode: 'development',
  cache: true,
  devtool: 'eval',
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.jsx',
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};
