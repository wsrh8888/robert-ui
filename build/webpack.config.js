const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './examples/play.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    ]
  },
  devServer: {
    host: '127.0.0.1',
    port: 8085,
    publicPath: '/',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(), //打包时清理dist
    new HtmlWebpackPlugin({           //打包生成新的html文件
      template: './examples/index.tpl',
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  }
};