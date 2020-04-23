const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: "bundle.js"
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'Webpack Output Management',
        //     filename: 'index.html',
        //     // template: 'src/index.html'
        // }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"],
        })
    ]
};