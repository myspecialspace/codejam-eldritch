const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './script.js',
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: 'main.js'
    },
    // mode: "development",
    module: {
        rules: [
            {
            //   test: /\.html$/,
            //   use: [
            //      {
            //         loader: 'html-loader',
            //         options: {minimize: false},
            //      }
            //   ]
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            // filename: 'index.html',
        })
    ],
    devServer: {
        // compress: true,
        port: 5500,
        static:{
            watch: true
        }
    },
}
