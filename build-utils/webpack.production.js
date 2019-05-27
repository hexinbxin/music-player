const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, '..') + "/app",
        filename: "[chunkhash].js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        })
    ]
}