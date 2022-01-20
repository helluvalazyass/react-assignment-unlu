const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: [
        "react-hot-loader/patch",
        "/src/index.js",
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main-bundle.js"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "react-hot-loader/webpack"
                    },
                    {
                        loader:"babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}