const webpackMerge = require("webpack-merge");
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const configMode = (mode) => {
    return require(`./build-utils/webpack.${mode}.js`);
}

module.exports = ({
        mode
    }) => {
        return webpackMerge({
                mode,
                entry: "./src/js/index.js",
                plugins: [
                    new htmlWebpackPlugin({
                        template: "./src/index.html"
                    }),
                    new webpack.ProgressPlugin()
                ],
                module: {
                    rules: [{
                            test: /\.js$/,
                            use: [{
                                loader: "babel-loader",
                                options: {
                                    presets: ["@babel/preset-env"]
                                }
                            }]},
                            {
                                test: /\.(png|jpg|gif)$/,
                                use: [{
                                    loader: 'url-loader',
                                    options: {
                                        limit: 8192
                                    }
                                }]
                            }]
                    }
                },
                configMode(mode))
        }