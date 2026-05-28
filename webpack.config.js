const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: path.join(__dirname, './dist/components-web'),
    filename: '[name].js',
    clean: true,
  },
  performance: {
    hints: false,
  },
  stats: {
    loggingDebug: ['sass-loader'],
  },
  infrastructureLogging: {
    appendOnly: true,
    level: 'error',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                // Suppress deprecation for color.red/green/blue —
                // needed for Angular DevKit compatibility (bundles Sass 1.54.x which lacks color.channel)
                silenceDeprecations: ['color-functions'],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  }
};
