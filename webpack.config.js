const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function production(env) {
  return {
    entry: path.join(__dirname, 'build', 'index.js'),
    mode: 'development',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: '/',
    },
    devServer: {
      port: 20000,
      historyApiFallback: true,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['tsx', 'ts', '.jsx', '.js', '.json'],
      alias: {
        '~': path.resolve(__dirname, 'build/'),
        '~image': path.resolve(__dirname, 'public/img/'),
        '~pages': path.resolve(__dirname, 'build/pages/'),
        '~components': path.resolve(__dirname, 'build/components/'),
        '~store': path.resolve(__dirname, 'build/store/'),
        '~api': path.resolve(__dirname, 'build/api/'),
        '~util': path.resolve(__dirname, 'build/util/'),
        // '@config': path.resolve(__dirname, 'submodule/config/'),
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader?sourceMap'],
        },
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /.(ts|tsx)$/,
          use: ['ts-loader', 'eslint-loader'],
        },
        // {
        //   test: /\.ts$/,
        //   exclude: /node_modules/,
        //   use: ['eslint-loader'],
        // },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                name: '[path][name].[ext]',
                jsx: true, // true outputs JSX tags
              },
            },
          ],
        },
        {
          test: /.(woff|woff2|jpg|jpeg|png|gif|mp3)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name]-[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        filename: 'index.html',
        template: path.join(__dirname, 'public', 'index.html'),
        // favicon: "public/img/map_favicon.ico",
        showErrors: true,
        minify: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
    ],
  };
}

module.exports = production;
