var path = require('path'); //nodejs модуль path
var webpack = require('webpack'); //пакет webpack

var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {               //точка(и) входа
        app: path.join(__dirname, 'Project', 'main'), // __dirname - 'Это абсолютный путь к файлу
        vendors: path.join(__dirname, 'Project', 'vendors'),
    },
    output: {             //точка(и) выхода
        filename: '[name].js',      // [name]- это шаблон, в данном случаи сюда подставится  main(.js) и vendors(.js)
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.html', '.sass', '.ts']
    },
    target: 'web',
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'Project', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
        new BrowserSyncWebpackPlugin({
            host: 'localhost',
            port: 8888,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};