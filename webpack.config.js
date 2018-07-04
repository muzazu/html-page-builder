const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'production',
    entry: {
        "bundle.min": [
            // js
            "./node_modules/vvvebjs/js/popper.min.js",
            "./node_modules/vvvebjs/js/bootstrap.min.js",
            "./node_modules/vvvebjs/js/jquery.min.js",
            "./node_modules/vvvebjs/js/jquery.hotkeys.js",
            "./node_modules/vvvebjs/libs/builder/builder.js",
            "./node_modules/vvvebjs/libs/builder/undo.js",
            "./node_modules/vvvebjs/libs/builder/inputs.js",
            "./node_modules/vvvebjs/libs/builder/components-bootstrap4.js",
            "./node_modules/vvvebjs/libs/builder/components-widgets.js",

            // scss    
            "./src/scss/main.scss"
        ]
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: { url: false } 
                },
                {
                    loader: "css-loader",
                    options: { url: false } 
                },
                {
                    loader: "sass-loader", 
                    options: { url: false } 
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    }
};