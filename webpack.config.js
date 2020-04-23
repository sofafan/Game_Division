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
        // new CleanWebpackPlugin({
        //     cleanAfterEveryBuildPatterns: ["dist"],
        // })
    ],
    devServer: {
		contentBase: './dist', // 告诉服务器从哪里提供内容
		host: '127.0.0.1', // 默认是 localhost
		port: 8088, // 端口号, 默认是8080
        open: true, // 是否自动打开浏览器
		hot: true, // 启用 webpack 的模块热替换特性
		// hotOnly: true // 当编译失败之后不进行热更新
    },
    devtool: 'inline-source-map',
};