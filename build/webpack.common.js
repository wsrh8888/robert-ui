const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: {
        app: ["./src/index.ts"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
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
    plugins: [
        new CleanWebpackPlugin(), //打包时清理dist
        new VueLoaderPlugin(),
        // new UglifyJSPlugin({
        //     uglifyOptions: {
        //         compress: {
        //             drop_debugger: true,
        //             drop_console: true
        //         }
        //     },
        //     sourceMap: true,
        //     parallel: true
        // }),
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
    externals: ["vue"], //不需要打包的内容
    output: {
        path: path.resolve(process.cwd(), "./lib"),
        publicPath: "/dist/",
        filename: "robert-ui.common.js",
        chunkFilename: "[id].js",
        libraryExport: "default",
        library: "Robert",
        libraryTarget: "commonjs2"
    }
};
