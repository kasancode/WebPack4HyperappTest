var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        counter: './src/counter.tsx',
        calc: './src/calc.tsx',
        panelGame: './src/panelGame.tsx',
        vendors: ["hyperapp"]
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/docs',
        libraryTarget: "global",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader:  ["ts-loader"]
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks:"all",
                    name: "vendors",
                    minSize : 10
                }
            }
        }
    }
};