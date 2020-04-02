const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        app: ["./src/index.ts"]
    },
    devtool: "source-map",
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
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
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
    plugins: [
        new CleanWebpackPlugin(), //打包时清理dist
        new VueLoaderPlugin(),
        new UglifyJSPlugin({
            sourceMap: true
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
