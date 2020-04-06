const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./examples/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
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
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
              // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
              publicPath: "./"
              // publicPath: devMode ? './' : '../',   // 根据不同环境指定不同的publicPath
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000
        }
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
    host: "127.0.0.1",
    port: 8085,
    publicPath: "/",
    hot: true,
    stats: "errors-only"
  },
  plugins: [
    new CleanWebpackPlugin(), //打包时清理dist
    new HtmlWebpackPlugin({
      //打包生成新的html文件
      template: "./examples/index.tpl"
    }),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://127.0.0.1:8085`]
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      main: path.resolve(__dirname, "../src"),
      packages: path.resolve(__dirname, "../packages"),
      examples: path.resolve(__dirname, "../examples")
    },
    modules: ["node_modules"]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  }
};
