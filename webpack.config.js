const path = require('path');

module.exports = {
  target: 'web',
  entry: {
    'index': './src/index.scss',
    'theme-contrast': './src/theme/contrast.scss',
    'theme-light': './src/theme/light.scss',
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].js' // output js file name is identical to css file name
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].css',
          }
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader?-url'
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }]
  }
};
