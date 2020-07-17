const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'dist/',
  },
  devServer: {
    overlay: true,
  },
  plugins: [new HTMLWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  // devtool: 'eval-sourcemap',
};

// module.exports = (env, options) => {
//   let production = options.mode === 'production';

//   conf.devtool = production ? false : 'eval-sourcemap';
//   return conf;
// };
