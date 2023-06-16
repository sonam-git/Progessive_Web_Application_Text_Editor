const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');


// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

// sets up the webpack configuration
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // webpack html with favicon
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J. A. T. E.',
        favicon: './favicon.ico'
      }),
      // service worker
      new GenerateSW({
        swDest: './src-sw.js'
      }),
      // manifest for install
      new WebpackPwaManifest({
        name: 'JATE',
        short_name: 'jate',
        description: 'Just Another Text Editor',
        background_color: '#ff00ff',
        theme_color: "#ff00ff",
        orientation: "portrait",
        display: "standalone",
        start_url: "./",
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    // loaders for CSS, JS, and Images
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
        {
          test: /\.png/,
          type: 'asset/resource',
        }
      ],
    },
  };
};
