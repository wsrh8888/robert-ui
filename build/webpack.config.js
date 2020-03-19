const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "production",
  entry: './examples/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        // options: vueLoaderConfig
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: { appendTsxSuffixTo: [/\.vue$/] }
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false //必须为false。否则在生产环境无法解析组件
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
    extensions: ['.tsx', '.ts', '.js', '.vue', '.json'],
    alias: {
      main: path.resolve(__dirname, '../src'),
      packages: path.resolve(__dirname, '../packages'),
      examples: path.resolve(__dirname, '../examples'),
      'element-ui': path.resolve(__dirname, '../')
    },
    modules: ['node_modules']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  }
};