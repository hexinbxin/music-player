module.exports = {
    devtool: "source-map",
    output: {
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    }
}