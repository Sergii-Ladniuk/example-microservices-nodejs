const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isDebug = !process.argv.includes('--release');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: [
        "@babel/polyfill",
        path.resolve(__dirname, 'bin/entrypoint.js')
    ],
    target: 'node',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'server.js'
    },
    node: {
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
        ]
    },
    plugins: [
        function () {
            this.plugin("done", function (stats) {
                if (stats.compilation.errors && stats.compilation.errors.length) {
                    console.log(stats.compilation.errors);
                    process.exit(1);
                }
            });
        }
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.join(__dirname, '.')],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
