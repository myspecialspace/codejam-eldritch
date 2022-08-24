const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './script.js',
        /*ancients: './assets/Ancients/index.js',
        ancientsData: './data/ancients.js',
        difficulties: './data/difficulties.js',
        cards: './assets/MythicCards/blue/index.js',
        cards: './assets/MythicCards/brown/index.js',
        cards: './assets/MythicCards/green/index.js',*/

    output: {
        path:path.resolve(__dirname, "dist"),
        filename: './dist/main.js'
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.html$/,
              use: [
                 {
                    loader: 'html-loader',
                    options: {minimize: false},
                 }
              ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        })
    ],
    devServer: {
        compress: true,
        port: 5500,
    },
}
