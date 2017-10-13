const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

if (!process.env.ENV || !process.env.ENV.length)
  throw new Error('ENV environment var not set');

const isProduction = !!(process.env.ENV === 'prod' || process.env.ENV === 'production');
const outPath = isProduction ? 'production' : 'development';

const config = {
  entry: {
    app: './src/index.js',
    vendor: ['kefir', 'eventemitter3', '@tweenjs/tween.js', 'vexflow', 'd3-selection'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, outPath)
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(process.env.ENV),
    }),
    new CleanWebpackPlugin([outPath], {
      exclude: 'lib',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: isProduction ? 'vendor.[chunkHash].js' : 'vendor.js',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'src/index.ejs',
      inject: 'head',
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".es6.js"],
    alias: {
      tween: '@tweenjs/tween.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      // If we encounter a .es6.js file in node_modules, babel them.
      {
        test: /node_modules.*\.es6\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Convert css to javascript code that applies the css to the DOM. This
      // seems a little silly. When we could just include static files in our
      // template. However, this is the idiomatic way to add css in webpack.
      //
      // Other options:
      // 1. check css directly into output folder. Exclude css from clean plugin
      // 2. style-ext-html-webpack-plugin package - complex but possibly optimal
      //
      // The advantage of having webpack handle is that we don't have to worry
      // about keeping our template up to date with the correct url.
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      // Copy images into img folder. This is a little sloppy: the images path
      // is ignored, so all images end up in img/
      {
        test: /(\.png|\.ico)$/,
        use: {
          loader: 'file-loader?name=img/[name].[ext]',
        }
      }
    ],
  },
};

if (isProduction) {
  console.log('Compiling in Production mode...\n')

  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  );

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  );
} else {
  console.log('Compiling in Development mode...\n');
  config.devtool = 'inline-source-map';
  config.devServer = { contentBase: outPath };
}

module.exports = config;
